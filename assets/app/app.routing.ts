import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { Component } from "@angular/core";
// import { AUTH_ROUTES } from "./auth/auth.routing";
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'}, // /messages is absolute path
    {path: 'messages', component: MessagesComponent}, // to load MessagesComponent
    {path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'}
    // notice it's a string, NOT a type; you DO NOT import it
    // lazy loading
    // can dynamically load this module when it's needed
]

export const routing = RouterModule.forRoot(APP_ROUTES); // this registers our routes in the Angular router module