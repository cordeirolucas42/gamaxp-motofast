import Head from 'next/head'
import Footer from "./footer";
import Menu from "./menu";
import styles from '../styles/Home.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>motofast</title>
                <meta name="description" content="Aluguel de motos" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Menu/>

            <main>
                {children}
            </main>

            <Footer/>
        </div>
    )
}