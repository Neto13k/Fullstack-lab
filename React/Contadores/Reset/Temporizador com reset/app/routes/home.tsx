import type { Route } from "./+types/home";
import { ContarSegundos } from "app/Components/Contador";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contador" },
    { name: "description", content: "Primeiro contador realizado no React Router!" },
  ];
}

export default function Home() {
  return < ContarSegundos/>;
}