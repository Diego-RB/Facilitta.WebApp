import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "app/services/auth.service";



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  declarations: [LoginComponent],
})
export class LoginModule {}
