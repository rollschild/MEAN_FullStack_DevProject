import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    // create an instance of MessageSerice and pass it to constructor
    // where then will be stored in this private messageService property
    providers: [MessageService] // blueprints
})
export class MessageInputComponent {
    constructor(private messageService: MessageService) {

    }
    onSave(value: string) {
        const message = new Message(value, 'JobiJobi');
        this.messageService.addMessage(message);
    }
}