import { useState } from "react";
import Cliente from "../core/Client"
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [idade, setIdade] = useState(props.cliente?.idade ?? "")
    return(
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-5"/>
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5" />
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />
            <div className="flex justify-end mt-7">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} cor="blue" className="mr-2">{id ? "Alterar" : "Salvar"}</Botao>
                <Botao onClick={props.cancelado} cor="gray">Cancelar</Botao>
            </div>
        </div>
    )
}