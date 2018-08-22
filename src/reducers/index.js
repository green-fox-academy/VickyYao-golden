import { combineReducers } from 'redux';
import toEatOrBuy from './reducer';

const rootReducer = combineReducers({
  toEatOrBuy,
});

export default rootReducer;
