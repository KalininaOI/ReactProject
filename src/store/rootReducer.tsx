import { combineReducers } from 'redux';
import { ItemsReducer } from './pages/AdvPage/reducer';

const reducers = {
  items: ItemsReducer,
};

export const rootReducer = combineReducers(reducers);
