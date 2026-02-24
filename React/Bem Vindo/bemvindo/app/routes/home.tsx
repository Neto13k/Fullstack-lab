import type { Route } from "./+types/home";
import { MensagemBemvindo } from "app/Components/Mensagem"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bem vindo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return < MensagemBemvindo/ >
}
