import css from "./NavbarUser.module.css"

import { useSelector, useDispatch } from "react-redux"
import {selectUser} from "../../../redux/auth/auth-selectors"
import { logout } from "../../../redux/auth/auth-operations"

const NavbarUser = () => {
    const { name } = useSelector(selectUser);
   
    
    const dispatch = useDispatch()

    const onLogout = () => dispatch(logout());

    return (
        <div className={css.container}>
            <span className={css.name}>{name}</span>
            <button onClick={onLogout}  className={css.logoutButton}>Logout</button>
        </div>
    )
}
export default NavbarUser