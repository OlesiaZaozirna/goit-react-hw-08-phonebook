import css from "./NavbarUser.module.css"

const NavbarUser = () => {
    return (
        <div className={css.container}>
            <p>mango@mail.com</p>
            <button>Logout</button>
        </div>
    )
}
export default NavbarUser