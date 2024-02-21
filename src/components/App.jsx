import { Routes, Route } from "react-router-dom";
import { lazy} from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "../redux/auth/auth-operations";

import css from "./App.module.css";

import SharedLayout from "./SharedLayout/SharedLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'))
const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const RegistrPage = lazy(()=> import('pages/RegistPage/RegistrPage'))
const ContactsPage = lazy(()=> import('pages/ContactsPage/ContactsPage'))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  },[dispatch]);

  return (
    <div className={css.container}>
      <Routes>
          <Route path="/" element={<SharedLayout />}>
             <Route index element={<HomePage />} />
              <Route element={<PublicRoute />}>
                    <Route path="register" element={<RegistrPage />} />
                    <Route path="login" element={<LoginPage />} />
             </Route>
             <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
             </Route>          
             <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  )
}
export default App

/*import { Filter } from './Filter/Filter';
import React, { useEffect } from 'react';
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

export default App;*/