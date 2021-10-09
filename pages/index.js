import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/motofast.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>motofast</title>
        <meta name="description" content="Aluguel de motos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >teste</div>
      <main className={styles.main}>
        <Image width={300} height={300*314/696} src={logo} alt="logo da motofast"/>
        <h1 className={styles.title}>
          motofast
        </h1>
        <p>Aluguel de motos</p>
      </main>
    </div>
  )
}
