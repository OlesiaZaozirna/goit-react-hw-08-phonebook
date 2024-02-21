import ContactForm from "../../components/ContactForm/ContactForm";
import { Filter } from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import css from "./MyContacts.module.css";


export const MyContacts = () => {
    return (
      <div className={css.MyContactsContainer}>
        <div className={css.FormContainer}>
          <ContactForm />
        </div>
        <div className={css.ContactListContainer}>
          <Filter name="filter"/>
          <ContactList/>
        </div>
      </div>
    );
}