import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  message: string;

  constructor( private todoService:TodoDataService,
                private router: Router) { }

  ngOnInit() {
   this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('ahmet').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('ahmet', id).subscribe(
      response => {
        console.log(response);
        this.message = ` ${id} Delete Successful `;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

}
