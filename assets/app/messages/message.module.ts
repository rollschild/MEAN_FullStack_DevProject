import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesComponent } from "./messages.component";
import { MessageListComponent } from "./message-list.component";
import { MessageComponent } from "./message.component";
import { MessageInputComponent } from "./message-input.component";
import { FormsModule } from "@angular/forms";
import { MessageService } from "./message.service";
@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessagesComponent,
        MessageInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule {

}