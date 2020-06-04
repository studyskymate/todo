import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://127.0.0.1:8080/users/${username}/todos`);
  }

  deleteTodo(username,id){
    return this.http.delete(`http://127.0.0.1:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`http://127.0.0.1:8080/users/${username}/todos/${id}`);
  }

  
  updateTodo(username,id,todo){
    return this.http.put(`http://127.0.0.1:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo){
    return this.http.post(`http://127.0.0.1:8080/users/${username}/todos`,todo);
  }

  createHttpHeaders(){

    let username='user1';
    let password='password1';
    let basicAuthHeaderString= 'Basic '+ window.btoa(username +':'+ password) ;    
    let header= new HttpHeaders(
      {
        Authorization :basicAuthHeaderString
      }
    )
    return header;
      }

}
