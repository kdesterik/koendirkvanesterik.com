import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import logger from 'redux-logger';


export default function config(){

  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware( browserHistory ),
      logger
    )
  );
  return store;
}