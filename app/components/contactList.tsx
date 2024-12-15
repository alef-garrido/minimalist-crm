import { useContext } from 'react';
import { ContactContext } from '../context/contactContext';
// import type { ContactData } from '../types';

const ContactList: React.FC = () => {
  const { contacts, deleteContact } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      {contacts.map((contact, index) => (
       <div key={contact.id} className="border p-2 mb-2 rounded flex justify-between items-center">
        <div>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
        </div>
          <button
            onClick={() => deleteContact(contact.id)} // Llama a deleteContact con el ID del contacto
            className="bg-red-600 text-white p-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;