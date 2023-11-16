import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public singIn(params: SignIn): boolean {
    this.auth.signInWithEmailAndPassword(params.email, params.password).then(
      () => {
        localStorage.setItem("token", "true");
        this.router.navigate(["dashboard"]);
      },
      (error) => {
        this.toastr.error("Falha ao tentar Logar");
        this.router.navigate(["/login"]);
      }
    );
    return false;
  }
}

type SignIn = {
  email: string;
  password: string;
}
