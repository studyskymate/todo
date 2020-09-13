import { Todo } from '../list-todo/list-todo.component'

export class TodoResponse {
    currentPage: number
    sortDirection: String
    sortField: String
    todosList: Array<Todo>
     recordPerPage: number;
    totalItems: number
    totalPages: number
}