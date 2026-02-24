import { ListadeFrutas } from "~/Components/ListadeFrutas";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tarefa lista de Frutas" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
     <main>
      <h1>Segue a lista de frutas:</h1> <br></br>
      <ListadeFrutas></ListadeFrutas>
    </main>
  );
}