import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public isLogin: boolean = true;
  public isLoadingButton: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authServer: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  public setValueIsLogin() {
    this.isLogin = !this.isLogin;
  }

  public loginORRegister() {
    this.isLoadingButton = true;

    this.isLoadingButton = this.authServer.singIn({
      email: this.form.value.email,
      password: this.form.value.password,
    });
  }
}
