import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoList } from './container';
import reducer from './reducer';

const app =   document.getElementById('app');
const store = createStore(reducer);

render (
  <Provider store={store}>
  <TodoList />
  </Provider>,
  app
);
