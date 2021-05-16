import { Injectable } from "@angular/core";
import io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable()


export class TodosService {

    constructor() { }

    private socket = io('http://localhost:3000');

    listen(eventName: string) {
        return new Observable((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(data)
            })
        })
    }

    addTodo(data) {
        this.socket.emit('add', { data });
    }

    // newTodoAdded() {
    //     let observable = new Observable<{ content: String }>(observer => {
    //         this.socket.on('new todo added', (data) => {
    //             observer.next(data);
    //         });
    //         return () => { this.socket.disconnect(); }
    //     });

    //     return observable;
    // }

    editTodo(data) {
        this.socket.emit('edit', { data });
    }

    // todoEdited() {
    //     let observable = new Observable<{user:String, message:String}>(observer=>{
    //         this.socket.on('new user joined', (data)=>{
    //             observer.next(data);
    //         });
    //         return () => {this.socket.disconnect();}
    //     });

    //     return observable;
    // }

    deleteTodo(data) {
        this.socket.emit('delete', { data });
    }

    // todoDeleted() {
    //     let observable = new Observable<{user:String, message:String}>(observer=>{
    //         this.socket.on('new user joined', (data)=>{
    //             observer.next(data);
    //         });
    //         return () => {this.socket.disconnect();}
    //     });

    //     return observable;
    // }
}