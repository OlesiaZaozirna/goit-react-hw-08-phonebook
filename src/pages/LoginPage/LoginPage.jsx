
import LoginForm from "../../components/LoginForm/LoginForm"

import { useSelector, useDispatch } from "react-redux"

import { login } from "../../redux/auth/auth-operations"
import { selectAuthLoading, selectAuthError} from "../../redux/auth/auth-selectors"


const LoginPage = () => {

    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    
    
    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    }

    return (
        <div>
            
            {authLoading && <p>...login in progress</p>}
            <LoginForm onSubmit={handleLogin } />
            {authError && <p style={{color: "red"}}>{authError}</p>}
               </div>
    )
}
export default LoginPage