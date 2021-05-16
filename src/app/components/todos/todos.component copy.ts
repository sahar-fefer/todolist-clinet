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

  constructor(private _chatService: TodosService) {

  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Call Mom',
        //  content: 'Call Mom jdsjdsn dsndjs jakja askjs fjdfnbd ekef eijf ejfjfe',
        completed: false,
        isInEditing: true
      },
      {
        content: 'Feed Queddy',
        completed: true,
        isInEditing: false
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
  deleteTodo(id: number) {
    this.todos = this.todos.filter((val, i) => i !== id)
  }
}
