// Angular uses modules to possibly split up your application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; // this module unlocks the Http service

import { AppComponent } from "./app.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from './auth/auth.service'; // stays here because it's application wide
import { ErrorService } from "./errors/error.service";
import { ErrorComponent } from './errors/error.component';
import { MessageModule } from "./messages/message.module";
@NgModule({ // decorator?
    declarations: [
        AppComponent,
        // this is the place where you add new components, directives, or pipes
        // it's so called "register"
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule, 
        routing, 
        // ReactiveFormsModule, 
        HttpModule,
        MessageModule
    ],
    providers: [AuthService, ErrorService], // it's available in the whole application
    bootstrap: [AppComponent] // which component is root component?
    // when starting up application?
})
// decorator: attach some additional stuff to the class
export class AppModule {

}