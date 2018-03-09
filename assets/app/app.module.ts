// Angular uses modules to possibly split up your application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http'; // this module unlocks the Http service

import { AppComponent } from "./app.component";

import { MessageComponent } from "./messages/message.component";

import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from './auth/auth.service';
import { ErrorService } from "./errors/error.service";
import { ErrorComponent } from './errors/error.component';
@NgModule({ // decorator?
    declarations: [
        AppComponent,
        // this is the place where you add new components, directives, or pipes
        // it's so called "register"
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
    providers: [AuthService, ErrorService], // it's available in the whole application
    bootstrap: [AppComponent] // which component is root component?
    // when starting up application?
})
// decorator: attach some additional stuff to the class
export class AppModule {

}