import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo, toggleToDo } from '../../state-management/actions/actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  allToDos: any;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.subscribe((state: any) => {
      console.log(state);
      this.allToDos = state.todosReducer;
    });
  }

  deleteMyTodo(id: any) {
    const deleteAction = deleteTodo(id);
    this.store.dispatch(deleteAction);
  }
  toggleMyTodo(id: any) {
    // const toggleAction = toggleToDo(id);
    this.store.dispatch({ type: 'TOGGLE_TODO', payload: { id: id } });
  }
}
