import { useContext, useState } from 'react';
import { ContactContext } from '../context/contactContext';
import ConfirmationDialog from './confirmationDialog';
import ContactEditForm from './ContactEditForm';

const ContactList: React.FC = () => {
  const { contacts, deleteContact } = useContext(ContactContext);
  const [showDialog, setShowDialog] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState<string>('');
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const openDeleteDialog = (id: string) => {
    setContactIdToDelete(id);
    setShowDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDialog(false);
  };

  const confirmDelete = () => {
    deleteContact(contactIdToDelete);
    closeDeleteDialog();
  };

  const handleEdit = (id: string) => {
    setIsEditing(id);
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
  };

  if (contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="border p-2 mb-2 rounded flex justify-between items-center"
        >
          <div>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
          </div>
          <div>
            <button
              onClick={() => handleEdit(contact.id)}
              className="bg-yellow-500 text-white p-2 rounded mr-2"
            >
              Editar
            </button>
            <button
              onClick={() => openDeleteDialog(contact.id)}
              className="bg-red-600 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {isEditing && (
        <ContactEditForm
          contactId={isEditing}
          onCancel={handleCancelEdit}
        />
      )}
      <ConfirmationDialog
        isOpen={showDialog}
        onClose={closeDeleteDialog}
        onConfirm={confirmDelete}
      >
        ¿Estás seguro de que deseas eliminar este contacto?
      </ConfirmationDialog>
    </div>
  );
};

export default ContactList;