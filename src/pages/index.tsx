import type { NextPage } from 'next'
import Botao from '../components/Botao'
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

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="blue" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}

export default Home
