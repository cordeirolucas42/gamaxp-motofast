import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const fetcher = async (api) => {
    const [cep, inicio, fim] = api
    console.log(cep, inicio, fim)
    const res = await fetch(`https://motofast-api.herokuapp.com/locais/proximos/${cep}/inicio/${inicio}/fim/${fim}`)
    return await res.json()
}

function Repo() {
    const [cep, setCep] = useState(" ")
    const [inicio, setInicio] = useState(" ")
    const [fim, setFim] = useState(" ")

    const [locais, setLocais] = useState([])

    const handleSubmit = async (evt) => {
        console.log("handleSubmit")
        evt.preventDefault();
        setLocais(await fetcher([cep, inicio, fim]))        
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>motofast</title>
                <meta name="description" content="Aluguel de motos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    motofast
                </h1>

                <form onSubmit={handleSubmit}>
                    <label style={{display: "block"}}>
                        CEP: 
                        <input
                            type="text"
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />
                    </label>
                    <label style={{display: "block"}}>
                        Data Início: 
                        <input
                            type="text"
                            value={inicio}
                            onChange={e => setInicio(e.target.value)}
                        />
                    </label>
                    <label style={{display: "block"}}>
                        Data Final: 
                        <input
                            type="text"
                            value={fim}
                            onChange={e => setFim(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <ul>
                    {locais.map(local => {
                        if (local.motos <= 0) return
                        return (
                            <li key={local.endereco} style={{listStyle: "none", border: "1px solid black", padding: "1em", margin: "1em"}}>
                                <p>Endereço: {local.endereco}</p>
                                <p>Motos Disponíveis: {local.motos}</p>
                            </li>
                        )
                    })}
                </ul>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}

export default function Home({ fallback }) {
    return (
        <Repo />
    )
}
