import { Component } from '@angular/core';
import { MessageService } from "./messages/message.service";
// import { Message } from "./messages/message.model";
// this makes this normal type of class a component now
@Component({
    selector: 'my-app',
    // each component needs to have a template
    templateUrl: './app.component.html',

    // create a one single instance of this service for 
    // this component and all child components,
    // namely app-message-list and app-message-input
    providers: [MessageService]
})
export class AppComponent {
    
}