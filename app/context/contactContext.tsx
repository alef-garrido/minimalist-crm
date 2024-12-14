import React from 'react';
import type { ContactData } from '../types';

export const ContactContext = React.createContext<{
  contacts: ContactData[];
  addContact: (contact: ContactData) => void;
  
}>({
  contacts: [],
  addContact: () => {},
});