export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getFilteredContacts = state =>
  getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  );
