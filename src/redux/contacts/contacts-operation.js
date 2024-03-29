import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../components/API/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.requestFetchContacts();
      console.log('Fetch Contacts Success:', data);
      return data;
    } catch (error) {
      console.error('Fetch Contacts Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.requestAddContacts(body);
      console.log('Add Contact Success:', data);
      return data;
    } catch (error) {
      console.error('Add Contact Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.requestDeleteContact(id);
      console.log('Delete Contact Success:', id);
      return id;
    } catch (error) {
      console.error('Delete Contact Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

/*import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-slice';

export const fetchContacts = () => {
  //Action Creator
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const data = await contactsAPI.requestFetchContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };
  return func;
};

export const addContact = body => {
  const func = async dispatch => {
    try {
      dispatch(addContactLoading());
      const data = await contactsAPI.requestAddContacts(body);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
    }
  };
  return func;
};

export const deleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteContactLoading());
      await contactsAPI.requestDeleteContact(id);
      dispatch(deleteContactSuccess(id));
    } catch (error) {
      dispatch(deleteContactError(error.message));
    }
  };
  return func;
};
*/
