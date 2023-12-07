import { Component, OnInit } from '@angular/core';
import { publicDecrypt } from "crypto";
import * as e from "express";

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit {
  public isExpense: boolean = false;
  public isDeposit: boolean = false;

  ngOnInit() {}

  public changeCheckbox(event: any, type: string): void {
    if (type == "expense") {
      this.isExpense = event.target.checked;
      if (this.isExpense) {
        this.isDeposit = false; // Desmarca o checkbox de depósito
      }
    } else if (type == "deposit") {
      this.isDeposit = event.target.checked;
      if (this.isDeposit) {
        this.isExpense = false; // Desmarca o checkbox de despesa
      }
    }
  }
}
