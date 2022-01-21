import { combineReducers, createReducer } from '@reduxjs/toolkit';
import changeFilter from './actions';
import { getItems, postItem, deleteItem } from './operations';

const contactsReducer = createReducer([], {
  [getItems.fulfilled]: (_, { payload }) => payload,
  [postItem.fulfilled]: addContact,
  [deleteItem.fulfilled]: deleteContact,
});

const loadingReducer = createReducer(false, {
  [getItems.pending]: () => true,
  [getItems.fulfilled]: () => false,
  [getItems.rejected]: () => false,

  [postItem.pending]: () => true,
  [postItem.fulfilled]: () => false,
  [postItem.rejected]: () => false,

  [deleteItem.pending]: () => true,
  [deleteItem.fulfilled]: () => false,
  [deleteItem.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [getItems.pending]: () => null,
  [getItems.rejected]: (_, { payload }) => payload,

  [postItem.pending]: () => null,
  [postItem.rejected]: (_, { payload }) => payload,

  [deleteItem.pending]: () => null,
  [deleteItem.rejected]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

function addContact(items, { payload }) {
  const { id, name, phone } = payload;
  const isFound = items.find(
    item => item.name.toLowerCase() === name.toLowerCase(),
  );
  if (isFound) return window.alert(`${name} is already in contacts.`);
  return [{ id: id, name: name, phone: phone }, ...items];
}

function deleteContact(items, { payload }) {
  return items.filter(({ id }) => id !== payload);
}

export default combineReducers({
  items: contactsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
