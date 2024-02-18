import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from 'components/Navigation/NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { selectIsLogin } from '../../redux/auth/auth-selectors';
import css from "./Navigation.module.css"


const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <nav className={css.navbar}>
      <Link to="/" className={css.logo}>
        Your Phonebook
      </Link>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
      
    </nav>
  );
};

export default Navigation;