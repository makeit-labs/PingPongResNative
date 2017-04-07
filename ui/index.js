import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import Root from './Root';
import reducer from '../hlpp/reducers';
import { fetchUser } from '../hlpp/cookieMonster';

const initialState = { tables: [], currentUser: fetchUser() };
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
