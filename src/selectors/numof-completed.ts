import { createSelector, createSelectorCreator } from 'reselect';

import { Appstate } from '../modules';
import * as Todos from '../domain/todos';
import { AppState } from 'react-native';

function getTodos(state: AppState) {
  return state.todos;
}

export const getCompletedTodos = createSelector(
  [getTodos],
  todos => Todos.getCompletedTodos(todos),
);

export const getNumofCompleted = createSelectorCreator(
  [getCompletedTodos],
  completedTodos => Todos.getNumofCompleted(completedTodos),
);

