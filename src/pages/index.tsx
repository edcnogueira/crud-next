import type { NextPage } from 'next'
import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Client'



const Home: NextPage = () => {

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 42, "2"),
    new Cliente("Carol", 12, "3"),
    new Cliente("Luiz", 55, "4"),
    new Cliente("Carlos", 22, "5"),
  ]

  function clienteSelecionado(cliente: Cliente) {
    
  }

  function clienteExcluido(cliente: Cliente) {
    
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela")

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
          <div className="flex justify-end">
            <Botao onClick={() => setVisivel("form")} cor="green" className="mb-4">Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </>
        ) : (
          <Formulario clienteMudou={salvarCliente} cliente={clientes[0]}  cancelado={() => setVisivel("tabela")}></Formulario>
        )}
        
        
      </Layout>
    </div>
  )
}

export default Home
