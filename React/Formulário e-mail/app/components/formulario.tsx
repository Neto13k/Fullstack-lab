import { useForm } from "react-hook-form";
import "app/formulario.css"

export function FormularioDados() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  function onSubmit() {
    alert("Dados enviados com sucesso!");
  }

  return (
    <div>
      <p>Informe seus dados </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("nome", { required: "Nome é obrigatório" })}
          className={errors.nome ? "erro" : ""}

        />
        <br></br><br></br>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email", { required: "Email é obrigatório" })}
          className={errors.email ? "erro" : ""}

        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
