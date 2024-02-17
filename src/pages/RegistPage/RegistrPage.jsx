
import css from "./RegistrPage.module.css"

import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import RegistrForm from "components/RegistrForm/RegictrForm"
import { signup } from "../../redux/auth/auth-operations"
import { selectAuthLoading, selectAuthError, selectIsLogin } from "../../redux/auth/auth-selectors"

const RegistrPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);
    
    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
    }

    if (isLogin) {
        return <Navigate to="/contacts" />
    }

    return (
        <main>
            <h1>Please Sign up</h1>
            {authLoading && <p>...Registration in progress</p>}
            <RegistrForm onSubmit={handleSignup} />
            {authError && <p style={{color: "red"}}>{authError}</p>}
        </main>
    )
}
export default RegistrPage