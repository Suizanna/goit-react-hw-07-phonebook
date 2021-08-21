import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';
// axios.defaults.baseURL = 'https://61156ec88f38520017a384ea.mockapi.io';

export function fetchContacts() {
  return axios.get('/contacts');
}

export function addContact(contact) {
  return axios.post('/contacts', contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}
