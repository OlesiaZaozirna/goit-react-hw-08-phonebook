import { NavLink } from "react-router-dom";
import menuItems from "./menuItems" 
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../../redux/auth/auth-selectors";

import css from "./NavbarMenu.module.css"

const NavbarMenu = () => {

    const isLogin = useSelector(selectIsLogin);

    const filteredMenuItems = !isLogin ? menuItems.filter(item=> !item.private) : menuItems;

    const elements = filteredMenuItems.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink className={css.link} to={to}>{text}</NavLink>
        </li>
    ))
    
    return (
        <ul className={css.menu}>
           {elements}
          </ul>
    )
}

export default NavbarMenu;