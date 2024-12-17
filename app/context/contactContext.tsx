import React from 'react';
import type { ContactData } from '../types';

export const ContactContext = React.createContext<{
  contacts: ContactData[];
  addContact: (contact: ContactData) => void;
  deleteContact: (id: string) => void;
  updateContact: (contact: ContactData) => void; 
}>({
  contacts: [],
  addContact: () => {},
  deleteContact: () => {},
  updateContact: () => {},
});