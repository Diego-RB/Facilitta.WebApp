import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "app/services/auth.service";
import { ResetPasswordComponent } from "./reset-password.component";



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  declarations: [ResetPasswordComponent],
})
export class ResetPasswoerdModule {}
