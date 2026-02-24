import type { Route } from "./+types/home";
import { Citizen } from "app/Components/Cartão"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carta de apresentação" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return < Citizen />;
}
