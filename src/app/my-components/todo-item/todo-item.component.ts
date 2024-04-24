import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input()
  todo: Todo;

  @Input()
  i: number;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  todoDone: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    console.log("TodoItemComponent constructor called");
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onClick called");
  }

  onCheckboxClick(todo: Todo) {
    this.todoDone.emit(todo);
    console.log("onCheckboxClick called");
  }
}
