import type { Route } from "./+types/home";
import { DataForm } from "app/components/Form"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Validação Dinâmica" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <DataForm/>
}
