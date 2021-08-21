import {  useSelector, useDispatch } from "react-redux";
// import contactsActions from '../../redux/contacts/contactsActions.js';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { nanoid } from "nanoid";
// import { getFilter} from "../../redux/contacts/contactsSelectors.";

import s from './PhonebookFilter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
    const error = useSelector(contactsSelectors.getError);
  
  const filterInputId = nanoid();

   return (
     <>
       {contacts.length > 0 && !error && (
      <label className={s.label}>
      <p>  Find contacts by name </p>
      <input
        className={s.input}
          id={filterInputId}
          type="text"
          value={value}
          onChange={(e) =>
            dispatch(contactsActions.filterContact(e.target.value))
          }
          placeholder="Name"
         />       
         </label>
         )}
  </>
);
};
export default Filter;






