import { useState,  useId } from "react";

 
import css from "./RegistrForm.module.css"

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
};

const RegistrForm = ({onSubmit}) => {
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

    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const { name, email, password } = state;
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <h2 className={css.title}>Please Sign up</h2>
            <div className={css.container_form}>
                <div className={css.container}>
                <label htmlFor={nameId}>Name:</label>
                <input value={name} onChange={handleChange} id={nameId}  name="name" required/>
            </div>
            <div  className={css.container}>
                <label htmlFor={emailId}>Email:</label>
                <input value={email} onChange={handleChange} id={emailId} type="email" name="email"  required/>
            </div>
            <div className={css.container}>
                <label htmlFor={passwordId}>Password:</label>
                <input value={password} onChange={handleChange}  id={passwordId} type="password" name="password" required />
                </div>
                </div>
            <button type="submit" className={css.button}>Register</button>
        </form>
    )
}
export default RegistrForm