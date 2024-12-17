import { useState, useContext } from 'react';
import { ContactContext } from '../context/contactContext';
import type { ContactData } from '../types';

const ContactEditForm: React.FC<{ contactId: string; onCancel: () => void }> = ({ contactId, onCancel }) => {
  const { contacts, updateContact } = useContext(ContactContext);
  const contact = contacts.find((contact) => contact.id === contactId);

  if (!contact) return null;

  const [formData, setFormData] = useState<ContactData>({
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateContact(formData);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full mb-2 p-2 border rounded"
      />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-600 mr-2 hover:text-gray-800"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
          disabled={!formData.name || !formData.email}
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ContactEditForm;