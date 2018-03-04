import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);

  const result = next(action);

  console.log('next state', store.getState());
  console.groupEnd(action.type);

  return result;
};


export default initialState => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logger),
  );

  if (module.hot) module.hot.accept('./reducers', () => store.replaceReducer(reducers));

  return store;
};