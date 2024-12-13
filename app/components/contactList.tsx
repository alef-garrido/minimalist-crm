import type { ContactData } from '../types';

interface ContactListProps {
  contacts: ContactData[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  if (contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      {contacts.map((contact, index) => (
        <div key={index} className="border p-2 mb-2 rounded">
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;