import ContactForm from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";



export const MyContacts = () => {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
       <Filter name="filter"/>
      <ContactList/>
      </>
    );
  }