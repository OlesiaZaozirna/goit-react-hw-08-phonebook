import React, { useEffect } from 'react';
import css from "./App.module.css";
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts-operation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.AppWrapper}>
      <div className={css.PhoneWrapper}>
        <h2 className={css.AppTitle}>Phonebook</h2>
        <ContactForm />
      </div>
      <div className={css.ContactsWrapper}>
        <h2 className={css.AppTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;