import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];
  localItem: string;
  constructor() {
    console.log("TodosComponent constructor called");

    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo) {
    console.log("deleteTodo called");
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addToDo(todo: Todo) {
    console.log("addToDo called");
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log('after add', JSON.stringify(this.todos));
  }

  doneToDo(todo: Todo) {
    console.log("doneToDo called");
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
