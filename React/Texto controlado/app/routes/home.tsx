import type { Route } from "./+types/home";
import { Message } from "~/components/InputSimples" ;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Texto controlado" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Message />;
}
