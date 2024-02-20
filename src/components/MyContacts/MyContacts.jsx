import ContactForm from "../../components/ContactForm/ContactForm";
import { Filter } from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./MyContacts.module.css";


export const MyContacts = () => {
    return (
      <div className="MyContactsContainer">
        <div className="FormContainer">
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        <div className="ContactListContainer">
          <h2>Contacts</h2>
          <Filter name="filter"/>
          <ContactList/>
        </div>
      </div>
    );
}