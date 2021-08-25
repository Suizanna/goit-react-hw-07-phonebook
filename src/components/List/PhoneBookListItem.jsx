// import s from './PhoneList.module.css';
// import { useEffect } from 'react';
// import {  useDispatch } from "react-redux";
// import { contactsOperations } from '../../redux/contacts';
// import { ReactComponent as DeleteIcon } from '../../img/delete.svg';

// const PhoneBookListItem = ({ name, number, id }) => {
// const dispatch = useDispatch();
 
//  //асинхрон. запрос
//   useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

//   return (
//        <li key={id} className={s.item}>
//        <p className={s.info}>
//             <b>{name}</b>
//             <em>{number}</em>
//           </p>
//       <button className={s.btn_circle}
//               type="button"
          
//           onClick={() => dispatch(contactsOperations.deleteContact(id))}>
//            {/* Delete */}
//         <DeleteIcon pointerEvents="none" width="26" height="26" />
//       </button>
//     </li>
//   );
// };
// export default PhoneBookListItem;