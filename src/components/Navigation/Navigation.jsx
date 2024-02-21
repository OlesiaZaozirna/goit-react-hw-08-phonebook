import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from 'components/Navigation/NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { MdPermPhoneMsg } from "react-icons/md";
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import css from "./Navigation.module.css"


const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <div className={css.navbar}>
      <Link to="/" className={css.logo}>
        <MdPermPhoneMsg  className={css.logo_icon} />
        Your Phonebook
      </Link>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
      
    </div>
  );
};

export default Navigation;