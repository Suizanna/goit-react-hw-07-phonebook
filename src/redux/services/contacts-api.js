import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';
// axios.defaults.baseURL = 'https://61156ec88f38520017a384ea.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');

  return data;
}
export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);

  return data;
}
export async function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

// export async function fetchContacts() {
//   const response = await axios.get('/contacts');
//   return response.data;
// }

// export async function addContact(contact) {
//   const response = await axios.post('/contacts', contact);
//   return response.data;
// }

// export async function deleteContact(id) {
//   const response = await axios.delete(`/contacts/${id}`);
//   return response.data;
// }
