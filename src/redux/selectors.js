export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getFilteredContacts = state =>
  state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  );
