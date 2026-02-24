import type { Route } from "./+types/home";
import { Contadorincrementado } from "app/components/contador";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contador com incremento" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return < Contadorincrementado/>
}
