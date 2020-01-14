import ReactDOM from 'react-dom'
import configureStore from './store/store';
import React from 'react';
import Root from './components/root';

import { closeModal } from './actions/modal_actions'; 

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.store = store; 
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  // window.closeModal = closeModal; 

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});