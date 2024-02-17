import css from "./NavbarUser.module.css"

import { useSelector } from "react-redux"
import {selectUser} from "../../../redux/auth/auth-selectors"

const NavbarUser = () => {
    const { name } = useSelector(selectUser);
    
    return (
        <div className={css.container}>
            {name}
            <button>Logout</button>
        </div>
    )
}
export default NavbarUser