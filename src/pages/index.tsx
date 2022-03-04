import type { NextPage } from 'next'
import Layout from '../components/Layout'



const Home: NextPage = () => {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <span>Conteudo</span>
      </Layout>
    </div>
  )
}

export default Home
