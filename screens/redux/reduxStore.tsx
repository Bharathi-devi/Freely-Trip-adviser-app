import thunk from 'redux-thunk';
import {createStore, applyMiddleware}  from 'redux';
import tripReducer from './TripReducer';


const store=createStore(tripReducer, applyMiddleware(thunk))
export default store;
