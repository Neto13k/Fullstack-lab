import type { Route } from "./+types/home";
import { Visibilidade } from "app/Components/visibilidade";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alterar visibilidade" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Visibilidade />;
}
