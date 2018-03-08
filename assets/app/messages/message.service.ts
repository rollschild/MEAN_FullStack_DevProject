import { Message } from "./message.model";
import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx'; // third party
import { Observable } from "rxjs"
import { EventEmitter } from "@angular/core";

@Injectable() // injector is able to give us the service here
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();
    constructor(private http: Http) {
        // should have some metadata/decorator 
        // in order to successfully inject data
    }
    addMessage(message: Message) {
        // this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const token = localStorage.getItem('token') 
            ? '?token=' + localStorage.getItem('token') 
            : '';
        // use HTTP service
        // NOTICE: this does NOT send the request
        // it only creates an observable
        // because so far no one has subscribed to the observable
        return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'JobiJobi', result.obj._id, null);
                this.messages.push(message);
                return message; 
            }) // this is automatically converted to observable
            .catch((error: Response) => Observable.throw(error.json())); // this is not; so we call Observable

    }
    getMessages() {
        // return this.messages;
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                // messages on server have different weird fields
                let transformedMessages: Message[] = [];
                for(let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Dunmmy', message._id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
                // a new Observable will be automatically created
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        // we want to keep this splice() method because
        // we still want to remove it from the front-end
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}