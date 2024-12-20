import { useState } from 'react';
import { ContactContext } from './contactContext';
import type { ContactData } from '../types';

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contacts, setContacts] = useState<ContactData[]>([]);

  const addContact = (contact: ContactData) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id: string) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts); 
  };

  const updateContact = (updatedContact: ContactData) => {
    const newContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(newContacts);
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, updateContact }}>
      {children}
    </ContactContext.Provider>
  );
};