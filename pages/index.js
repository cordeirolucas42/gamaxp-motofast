import Image from 'next/image'
import logo from '../public/motofast.png'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      {/* HOME PAGE */}
      <Image width={300} height={300*314/696} src={logo} alt="logo da motofast"/>
      <p>Aluguel de motos</p>
    </Layout>
  )
}
