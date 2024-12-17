import type { Route } from "./+types/home";
import { ContactProvider } from '../context/ContactProvider';
import WelcomePage from "../components/welcomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Minimalist CRM" },
    { name: "description", content: "Welcome to my CRM for small businesses" },
  ];
}

export default function Home() {

  return (
    <ContactProvider>
      <WelcomePage />
    </ContactProvider>

);
}
