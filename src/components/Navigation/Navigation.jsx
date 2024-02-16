import React from 'react';
import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from 'components/Navigation/NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import css from "./Navigation.module.css"

const Navigation = () => {
  const isLogin = false;

  return (
    <nav className={css.navbar}>
      <Link to="/">Logo</Link>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
      
    </nav>
  );
};

export default Navigation;