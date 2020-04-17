import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';

// addition for redux debug
const composeEnhancers = composeWithDevTools({});

const logger = store => next => action => {
  console.log(action.type);
  return next(action);
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
);
export default store;