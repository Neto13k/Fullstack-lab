import { useForm } from "react-hook-form";
import "app/Form.css";

export function DataForm(){
    const {register, handleSubmit, formState: {errors} } = useForm();

    function onSubmit(){
        alert("Dados encaminhados com sucesso!");
    }
    return(
        <div>
            <p>Informe seus Dados</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Digite seu nome" {...register("nome", {required: "Nome é obrigatório"})}className={errors.nome ? "erro" : ""}/>
            <br/>
            <input type="Email" placeholder="Digite seu E-mail" {...register("email", {required: "E-mail é obrigatório"})}className={errors.email ? "erro" : ""}/>
            <br/>
            <button type="submit">Enviar dados</button>
            </form>
        </div>
    )
}
