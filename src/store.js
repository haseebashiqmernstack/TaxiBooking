import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
// import rootReducer from '../rootReducer/rootReducer';
import thunk  from 'redux-thunk';
import rootReducer from './rootReducer';
const store=createStore(
   rootReducer,
    applyMiddleware(thunk)
);

export default store;