import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/contactContext';
import type { ContactData } from '../types';
import { v4 as uuidv4 } from 'uuid';

const ContactForm:  React.FC = () =>  {
  const { addContact } = useContext(ContactContext);

  const [formData, setFormData] = useState<ContactData>({
    id: '',
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact = {
      ...formData,
      id: uuidv4() 
    };
    addContact(newContact);
    setFormData({
      id: '',
      name: '',
      phone: '',
      email: '',
      address: ''
    });
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
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded"
        disabled={!formData.name || !formData.email}
      >
        Create Contact
      </button>
    </form>
  );
};

export default ContactForm;