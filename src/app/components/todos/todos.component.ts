import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})

export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo: string = "";
  constructor(private _todosService: TodosService) { }
  
  ngOnInit(): void {
    this._todosService.listen('test').subscribe((data) => {
      console.log(data)
    })
    this.todos = [
      {
        content: 'Call Mom',
        isInEditing: false,
        completed: false
      },
      {
        content: 'Feed Queddy',
        isInEditing: false,
        completed: true
      }
    ]
  }

  addTodo() {
    if (this.inputTodo) {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
        isInEditing: false
      });

      this.inputTodo = "";
    }
  }
  toggleDone(id: number) {
    this.todos.map((val, i) => {
      if (i == id) val.completed = !val.completed;
      return val
    })
  }
  editTodo(id: number, event: KeyboardEvent): void {
    this.todos.map((val, i) => {
      if (i === id && !val.completed) {
          val.isInEditing = !val.isInEditing;
      }
    })
  }
  updateTodo(id: number, content: string) {
    this.todos.map((val, i) => {
      if (i === id) {
          val.content = content;
          console.log('content', content);
      }
    })
    console.log('content', content);
    console.log('id', id);
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((val, i) => i !== id)
  }

  // join() {
  //   this._chatService.joinRoom({ user: this.user, room: this.room });
  // }

  // leave() {
  //   this._chatService.leaveRoom({ user: this.user, room: this.room });
  // }

  // sendMessage() {
  //   this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
  // }  

  // addTodo(content) {
  //   this._todosService.addTodo({ content });
  // }
  // toggleDone(id: number) {
  //   this._todosService.toggleDone(id);
  // }
  // editTodo(id: number, content: string): void {
  //   this._todosService.editTodo({id, content});
  // }
  // deleteTodo(id: number) {
  //   this._todosService.deleteTodo({id});
  // }
}
