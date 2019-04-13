import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  /*todos= [
    new Todo(1,'Learn to Dance', false, new Date()),
    new Todo(2,'Learn to Code', false, new Date()),
    new Todo(3,'Learn to Eat', false, new Date()),
    new Todo(4,'Learn to Swim', false, new Date()),
  ];
*/
  todos : Todo[] ;

  constructor( private todoService:TodoDataService) { }

  ngOnInit() {
   this.todoService.retrieveAllTodos('ahmet').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

}
