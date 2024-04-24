import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  constructor() {
    console.log("AppComponent constructor called");
    
    setTimeout(() => {
      this.title = "my first angular app";
    }, 2000);
  }
}
