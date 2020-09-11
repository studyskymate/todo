import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';
import { API_URL } from 'app.const';
import { UserAccount } from 'src/app/useraccount/useraccount.component';
import { TodoResponse } from 'src/app/models/todo-response';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {
  saveUser(user: UserAccount) {
    return this.http.post(`${API_URL}/users/save`,user);
  }

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  
  
  retrieveUserTodos(username,page,pagesize,sortField,sortDirection){
    return this.http.get<TodoResponse>(`${API_URL}/users/${username}/todos/v2/${page}/${pagesize}?sortField=${sortField}&sortDirection=${sortDirection}`);
  }

  deleteTodo(username,id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  
  updateTodo(username,id,todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo){
    return this.http.post(`${API_URL}/users/${username}/todos`,todo);
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
