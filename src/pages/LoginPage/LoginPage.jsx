import css from "./LoginPage.module.ccs"
import LoginForm from "../../components/LoginForm/LoginForm"

import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { login } from "../../redux/auth/auth-operations"
import { selectAuthLoading, selectAuthError, selectIsLogin } from "../../redux/auth/auth-selectors"


const LoginPage = () => {

    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);
    
    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    }

    if (isLogin) {
        return <Navigate to="/contacts" />
    }


    return (
        <div>
            <h1>Login page</h1>
            {authLoading && <p>...login in progress</p>}
            <LoginForm onSubmit={handleLogin } />
            {authError && <p style={{color: "red"}}>{authError}</p>}
               </div>
    )
}
export default LoginPage