import { Component } from '@angular/core';
import { addTodo } from '../../state-management/actions/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  constructor(private store: Store) {
  }
  addNewToDo(todoText: string) {
    const actionObj = addTodo(todoText);
    this.store.dispatch(actionObj);
  }
}
