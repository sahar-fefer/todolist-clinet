import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
       content: 'Call Mom',
      //  content: 'Call Mom jdsjdsn dsndjs jakja askjs fjdfnbd ekef eijf ejfjfe',
        completed: false
      },
      {
        content: 'Feed Queddy',
        completed: true
      }
    ]
  }
}
