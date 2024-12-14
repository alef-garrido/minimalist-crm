import React from 'react';
import type { ContactData } from '../types';

export const ContactContext = React.createContext<{
  contacts: ContactData[];
  addContact: (contact: ContactData) => void;
  // Add other state management functions as needed
}>({
  contacts: [],
  addContact: () => {},
  // Initialize other functions
});