import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  public form!: FormGroup;
  public isLogin: boolean = true;
  public isLoadingButton: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authServer: AuthService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  public resetPassword(){
    this.authServer.ResetPassword(this.form.value.email);
  }
}
