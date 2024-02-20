import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from "../../redux/contacts/contacts-selectors";

import css from "./ContactForm.module.css"

import {addContact} from '../../redux/contacts/contacts-operation';

const ContactForm = () => {
 const [formData, setFormData] = useState ({
    name: '',
    number: '',
 });
  const contacts = useSelector(selectFilteredContacts);
 
  const dispatch = useDispatch();

 

  const handleSubmit = e => {
    e.preventDefault();

    //перевірка на дублювання номера
    const isUnique = !contacts.some(contact => contact.name === formData.name);
    if (!isUnique) {
      alert('This contact already exists');
      return;
    }
  
    if (!validateName(formData.name)) {
      alert('Please enter a valid name');
      return;
    }

    if (!validateNumber(formData.number)) {
      alert('Please enter a valid phone number');
      return;
    }
      
    dispatch(addContact(formData));

    setFormData({ name: '', number: '' });
  };
  

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
     };
  
  const validateName = name => /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);

  const validateNumber = number =>
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(number);

      return (
        <div>
          <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.title}>Phonebook</h2>
            <label className={css.label} htmlFor="name">Name</label>
        <input
          className={css.input}
          type="text"
          placeholder="Contact name"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label className={css.label} htmlFor="number">Number</label>
        <input
          className={css.input}
          type="tel"
          placeholder="Phone number"
          name="number"
          id="number"
          required
          value={formData.number}
          onChange={handleChange}
        />

        <button className={css.button} type="submit">Add contact</button>
      </form>
    </div>
  );
}


export default ContactForm;