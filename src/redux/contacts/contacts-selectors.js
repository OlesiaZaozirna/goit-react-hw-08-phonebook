import { createSelector } from 'reselect';

export const selectContacts = store => store.contacts;
export const selectFilter = store => store.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts.items;
    }

    const normalizedFilter = filter.toLowerCase();

    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
