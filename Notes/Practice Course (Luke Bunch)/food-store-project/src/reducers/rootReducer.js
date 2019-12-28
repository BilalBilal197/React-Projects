// this is the root reducer! it is the store manager for all the reducers
// to make a rootreducer:
// 1. Get a method from redux, called combineReducers
import { combineReducers } from 'redux';
// 2. Get each individual reducers
import frozenReducer from './frozenReducer';
import produceReducer from './produceReducer';
import meatReducer from './meatReducer';
// 3. call combinereducers and hand it an object. each key in combine reducers will be a piece of state in the store and each value will be the value of that piece of state in store.
const rootreducer = combineReducers({
  frozen: frozenReducer,
  produce: produceReducer,
  meat: meatReducer
})

export default rootreducer;