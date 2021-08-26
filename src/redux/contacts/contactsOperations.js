import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions.js';
import * as contactsAPI from '../../services/contacts-api';

//операции это асинхронный createAction
export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  contactsAPI
    .fetchContacts()
    .then(data => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  contactsAPI
    .addContact(contact)
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  contactsAPI
    .deleteContact(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
//=================================
//2 вар. createAsyncThunk уже есть createAction автоматически
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from '../../utils/contacts-api';

// export const fetchContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.fetchContacts();

//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );
