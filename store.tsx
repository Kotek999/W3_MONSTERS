import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

export const sagaMiddleware = createSagaMiddleware();

export default function getStore(){

   
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(applyMiddleware(sagaMiddleware))

    return createStore(
        rootReducer,  
        middleware);
}
