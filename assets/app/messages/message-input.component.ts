import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
    // create an instance of MessageSerice and pass it to constructor
    // where then will be stored in this private messageService property
    // providers: [MessageService] // blueprints
})
export class MessageInputComponent {
    constructor(private messageService: MessageService) {
        // right now it's one instance per component mode
    }
    onSubmit(form: NgForm) {
        // console.log(form);
        
        const message = new Message(form.value.content, 'JobiJobi');
        this.messageService.addMessage(message);
        form.resetForm();
    }
}