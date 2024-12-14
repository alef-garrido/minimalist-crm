import ContactForm from './contactForm';
import ContactList from "./contactList";

const WelcomePage: React.FC = () => {
  
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-slate-700">INSTRUCCIONES: Ingresa los datos de tu contacto y revisalos en la lista que aparece debajo.</h1>
        </header>
        <div>
      <h1 className="text-2xl font-bold text-center my-4">CRM App</h1>
      <ContactForm />
      <ContactList />
    </div>
      </div>
    </main>
  );
}

export default WelcomePage;