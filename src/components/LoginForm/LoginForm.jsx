import { useState,  useId } from "react";

 
import css from "./LoginForm.module.css"

const INITIAL_STATE = {
    email: "",
    password: "",
};

const LoginForm = ({onSubmit}) => {
    const [state, setState] = useState({ ...INITIAL_STATE });

    const handleChange = ({ target }) => {
        const { name, value, type, checked } = target;
        const newValue = type === "checkbox" ? checked : value;

        setState({
            ...state,
            [name]: newValue,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        reset();
    }

    const reset = () => {
        setState({ ...INITIAL_STATE });
    }

   
    const emailId = useId();
    const passwordId = useId();
    const { email, password } = state;
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div  className={css.container}>
                <label htmlFor={emailId}>Email:</label>
                <input value={email} onChange={handleChange} id={emailId} type="email" name="email"  required/>
            </div>
            <div className={css.container}>
                <label htmlFor={passwordId}>Password:</label>
                <input value={password} onChange={handleChange}  id={passwordId} type="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}
export default LoginForm