import { Message } from "./message.model";
import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx'; // third party
import {Observable} from "rxjs"

@Injectable() // injector is able to give us the service here
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {
        // should have some metadata/decorator 
        // in order to successfully inject data
    }
    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        // use HTTP service
        // NOTICE: this does NOT send the request
        // it only creates an observable
        // because so far no one has subscribed to the observable
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
        .map((response: Response) => response.json()) // this is automatically converted to observable
        .catch((error: Response) => Observable.throw(error.json())); // this is not; so we call Observable

    }
    getMessages() {
        return this.messages;
    }
    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}