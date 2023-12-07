import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Inicio", icon: "nc-bank", class: "" },
  {
    path: "/user",
    title: "Cadastro de valores",
    icon: "nc-money-coins",
    class: "",
  },
  { path: "/table", title: "Extrato", icon: "nc-money-coins", class: "" },
  {
    path: "/typography",
    title: "Legislação",
    icon: "nc-single-copy-04",
    class: "",
  },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
