import { Component } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
import { OnInit } from "@angular/core";
// import { MessageComponent } from "./message.component";
@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
                [inputMessage]="message" 
                *ngFor="let message of messages">
                </app-message>
        </div>
    `
    // providers: [MessageService]
})

export class MessageListComponent implements OnInit {
    messages: Message[] = [
        // no matter what, these will be gone.
        // now we fetch the messages from the service, which is 
        // empty at the beginning
        new Message('I love you.', 'Jovi'),
        new Message('I wont\'t forget you.', 'Jobi'),
        new Message('Uh-ha!', 'JobiJobi')
    ];

    constructor(private messageService : MessageService) {

    }
    // this is one instance per component mode
    ngOnInit() {
        // assign this array from service to this component
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}