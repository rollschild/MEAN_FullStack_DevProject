import { Routes } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
export const AUTH_ROUTES: Routes = [
    {
        path: '', 
        redirectTo: 'signup',
        pathMatch: 'full'
    },
    {
        // child paths of /auth
        path: 'signup',
        component: SignupComponent
    },
    {
        // child paths of /auth
        path: 'signin',
        component: SigninComponent
    },
    {
        // child paths of /auth
        path: 'logout',
        component: LogoutComponent
    }

];