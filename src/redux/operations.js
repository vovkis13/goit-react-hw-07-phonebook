import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axiosInstance = axios.create({
  baseURL: 'https://61c9aac920ac1c0017ed8d58.mockapi.io/contacts',
});

export const getItems = createAsyncThunk('contacts/getItems', async () => {
  const url = '/contacts';
  const { data } = await axiosInstance(url);
  return data;
});

export const postItem = createAsyncThunk('contacts/postItem', async contact => {
  const url = '/contacts';
  const param = { method: 'POST', body: JSON.stringify(contact) };
  const { data } = await axiosInstance(url, param);
  return data;
});

export const deleteItem = createAsyncThunk('contacts/deleteItem', async id => {
  const url = `/contacts/${id}`;
  const param = { method: 'DELETE' };
  await axiosInstance(url, param);
  return id;
});
