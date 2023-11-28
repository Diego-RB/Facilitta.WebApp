import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserModel } from "app/models/UserModel";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = "https://facillita.azurewebsites.net/user";

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    //private http: HttpClient
  ) {}

  public singIn(params: SignIn): boolean {
    this.auth.signInWithEmailAndPassword(params.email, params.password).then(
      () => {
        this.auth.idToken.subscribe((result) => {
          console.log(result);
          localStorage.setItem("token", result);
          this.router.navigate(["/dashboard"]);
        });
      },
      (error) => {
        this.toastr.error("Falha ao tentar Logar");
        this.router.navigate(["/login"]);
      }
    );
    return false;
  }

  public singInAndRegisterWhithProvider(): boolean {
    this.auth.signInWithPopup(new GoogleAuthProvider()).then(
      () => {
        this.auth.idToken.subscribe((result) => {
          console.log(result);
          localStorage.setItem("token", result);
          this.router.navigate(["/dashboard"]);
        });
      },
      (error) => {
        this.toastr.error("Falha ao tentar Logar");
        this.router.navigate(["/login"]);
      }
    );
    return false;
  }

  public Register(params: SignIn): boolean {
    let user = new UserModel();
    this.auth
        .createUserWithEmailAndPassword(params.email, params.password)
        .then(
          () => {
            this.auth.idToken.subscribe((result) => {
              localStorage.setItem("token", result);
              this.router.navigate(["/dashboard"]);
            });

            this.auth.user.subscribe((result) => {
              user.username = result.displayName;
              user.email = result.email;
              user.uid = result.uid;

              //this.createUser(user);
            })
          },
          (error) => {
            this.toastr.error("Falha ao Registrar-se");
            this.router.navigate(["/login"]);
          }
        );
    return false;
  }

  public async ResetPassword(email: string) {
    await this.auth.sendPasswordResetEmail(email).then(
      () => {
        this.auth.idToken.subscribe((result) => {
          this.router.navigate(["/login"]);
        });
      },
      (error) => {
        this.toastr.error("Falha ao tentar redefinir senha");
        this.router.navigate(["/login"]);
      }
    );
  }

  public logout() {
    localStorage.setItem("token", "");
    this.router.navigate(["/login"]);
  }

  // private createUser(user: UserModel) {
  //   this.http.post(this.baseUrl, user);
  // }
}

type SignIn = {
  email: string;
  password: string;
};
