// Angular uses modules to possibly split up your application

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from "./messages/message.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
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
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent] // which component is root component?
    // when starting up application?
})
// decorator: attach some additional stuff to the class
export class AppModule {

}