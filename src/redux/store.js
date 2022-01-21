import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
