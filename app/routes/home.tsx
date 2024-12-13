import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Minimalist CRM" },
    { name: "description", content: "Welcome to my CRM for small businesses" },
  ];
}

export default function Home() {
  return <Welcome />;
}
