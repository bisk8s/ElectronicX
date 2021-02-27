import { combineReducers, createStore } from 'redux';
import systemReducer from './system/Reducer';

const rootReducer = combineReducers({
  system: systemReducer,
});
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof createStore>;
export default store;
