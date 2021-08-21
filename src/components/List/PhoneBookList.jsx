import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
import s from './PhoneList.module.css';


const PhoneBookList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);
 //асинхрон. запрос
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 && !error && (
        <ul className={s.list}>
          {visibleContacts.map(({ name, number, id }) => {
            return (
              <li key={id} className={s.item}>
                <p className={s.info}>
                  <b>{name}</b>
                  <em>{number}</em>
                </p>

                <button className={s.btn_circle}
                  type="button"
                  onClick={() => dispatch(contactsOperations.deleteContact(id))
                  }
                >
           <DeleteIcon pointerEvents="none" width="26" height="26" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
   </>
  );
};

export default PhoneBookList;





