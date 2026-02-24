import type { Route } from "./+types/home";
import { FormularioDados } from "app/components/formulario"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Formulário" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <FormularioDados />;
}
