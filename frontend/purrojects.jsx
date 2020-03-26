import ReactDOM from 'react-dom'
import configureStore from './store/store';
import React from 'react';
import Root from './components/root';
import { loadState, saveState } from './local_storage';
import throttle from 'lodash/throttle';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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



// document.addEventListener("DOMContentLoaded", () => {

//   let preloadedState = loadState();
//   let store = configureStore(preloadedState);
//   store.subscribe(throttle(() => {
//     saveState({
//       entities: store.getState().entities,
//       session: store.getState().session
//     })
//   }, 1000));

//   const root = document.getElementById("root");
//   ReactDOM.render(<Root store={store} />, root);
// });