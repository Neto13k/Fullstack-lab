import type { Route } from "./+types/home";
import { Mensagem } from "../components/InputSimples";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fomulario" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main>
    < Mensagem/>
  </main>
}
