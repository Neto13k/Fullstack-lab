import type { Route } from "./+types/home";
import { Poster } from "app/Components/Filme";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lista de filmes" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Poster />;
}
