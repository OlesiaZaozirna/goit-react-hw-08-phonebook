import { NavLink } from "react-router-dom";

import css from "./NavbarMenu.module.css"

const NavbarMenu = () => {
    return (
        <ul className={css.menu}>
            <li>
                <NavLink className={css.link} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={css.link} to="/contacts">Contacts</NavLink>
            </li>
          </ul>
    )
}

export default NavbarMenu;