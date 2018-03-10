import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
const AUTH_ROUTES: Routes = [
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

export const authRouting = RouterModule.forChild(AUTH_ROUTES); // only valid for this auth section