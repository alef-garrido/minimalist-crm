import { useContext } from 'react';
import { ContactContext } from '../context/contactContext';

const ContactList: React.FC = () => {
  const { contacts } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      {contacts.map((contact, index) => (
        <div key={'contact_' + index} className="border p-2 mb-2 rounded">
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;