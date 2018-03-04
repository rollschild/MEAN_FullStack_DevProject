import { Component, OnInit } from "@angular/core";
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
export class MessageInputComponent implements OnInit {
    message: Message;
    constructor(private messageService: MessageService) {
        // right now it's one instance per component mode
    }
    onSubmit(form: NgForm) {
        // console.log(form);
        if(this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        }
        else {
            // Create
            const message = new Message(form.value.content, 'JobiJobi');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            // subscribe to any event
            (message: Message) => this.message = message
        );
    }
}