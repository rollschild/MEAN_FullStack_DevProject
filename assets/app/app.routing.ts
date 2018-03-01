import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { Component } from "@angular/core";
import { AUTH_ROUTES } from "./auth/auth.routes";
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'}, // /messages is absolute path
    {path: 'messages', component: MessagesComponent}, // to load MessagesComponent
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES); // this registers our routes in the Angular router module