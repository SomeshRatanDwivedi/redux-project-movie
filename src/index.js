import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';

// const logger=function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       console.log('action type', action.type);
//       next(action)
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function'){
    console.log('action type', action.type);
  }
 
  next(action)
}

const thunk = ({ dispatch, getState }) => (next) => (action) => {
     if(typeof action==='function'){
        action(dispatch);
        return
     }
  next(action)
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

