import { NavLink } from "react-router-dom";
import css from "./NavbarAuth.module.css"

const NavbarAuth = () => {
    return (
        <div className={css.container}>
            <NavLink to="/register" className={css.link}>Register</NavLink>
            <NavLink to="/login" className={css.link}>Login</NavLink>
        </div>
    )
}
export default NavbarAuth;