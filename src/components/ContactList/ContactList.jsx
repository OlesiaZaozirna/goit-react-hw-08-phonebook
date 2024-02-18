import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from "../../redux/contacts/contacts-selectors";
import css from "./ContactList.module.css";
import { deleteContact } from '../../redux/contacts/contacts-operation';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  if (!contacts) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={css.ContactListContainer}>
      {contacts.map(({ _id, name, phone }) => (
        <li className={css.ContactListItem} key={_id}>
          <p className={css.Description}>
            {name}: {phone}
          </p>
          <button className={css.Delete} onClick={() => dispatch(deleteContact(_id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;