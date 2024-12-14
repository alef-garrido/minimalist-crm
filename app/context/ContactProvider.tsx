import { useState } from 'react';
import { ContactContext } from './ContactContext';
import type { ContactData } from '../types';

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contacts, setContacts] = useState<ContactData[]>([]);

  const addContact = (contact: ContactData) => {
    setContacts([...contacts, contact]);
  };

  // Add other state management functions as needed

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};