
import { useSelector, useDispatch } from "react-redux"

import RegistrForm from "components/RegistrForm/RegictrForm"
import { signup } from "../../redux/auth/auth-operations"
import { selectAuthLoading, selectAuthError} from "../../redux/auth/auth-selectors"

const RegistrPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    
    
    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
    }

    return (
        <main>
            <h1></h1>
            {authLoading && <p>...Registration in progress</p>}
            <RegistrForm onSubmit={handleSignup} />
            {authError && <p style={{color: "red"}}>{authError}</p>}
        </main>
    )
}
export default RegistrPage