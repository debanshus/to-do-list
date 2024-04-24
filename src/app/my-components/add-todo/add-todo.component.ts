import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string;
  desc: string;

  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    console.log('Onsubmit is called');
    const todo = new Todo();

    todo.title = this.title;
    todo.desc = this.desc;
    todo.active = true;

    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
