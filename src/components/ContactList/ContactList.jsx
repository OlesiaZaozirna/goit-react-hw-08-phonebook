import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from "../../redux/contacts/contacts-selectors";
import css from "./ContactList.module.css";
import { deleteContact, fetchContacts, } from '../../redux/contacts/contacts-operation';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  if (!contacts) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={css.ContactListContainer}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.ContactListItem} key={id}>
          <p className={css.Description}>
            {name}: {number}
          </p>
          <button className={css.Delete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
