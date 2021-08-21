import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
//================================================================
// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import contactsReducer from './contacts/contactsReducer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
// });
