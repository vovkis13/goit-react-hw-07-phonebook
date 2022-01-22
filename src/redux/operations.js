import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems, postItem, deleteItem } from 'services/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await getItems();
    return contacts;
  },
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async contact => {
    const newContact = await postItem(contact);
    return newContact;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteItem(id);
    return id;
  },
);
