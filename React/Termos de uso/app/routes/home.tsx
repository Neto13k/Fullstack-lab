import type { Route } from "./+types/home";
import { MyCheckbox } from "app/Components/checkbox";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Termos e condições" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <MyCheckbox />;
}
