import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR, { SWRConfig } from 'swr'
import { useState } from 'react'

const fetcher = async (api) => {
    const [cep, inicio, fim] = api
    console.log(cep, inicio, fim)
    const res = await fetch(`https://motofast-api.herokuapp.com/locais/proximos/${cep}/inicio/${inicio}/fim/${fim}`)
    return await res.json()
}

const API = 'https://motofast-api.herokuapp.com/locais/proximos/04714001/inicio/2021-10-15/fim/2021-10-25'
export async function getServerSideProps() {
    const repoInfo = await fetcher(["04714001", "2021-10-15", "2021-10-25"]);
    return {
        props: {
            fallback: {
                [API]: repoInfo
            }
        }
    };
}

function Repo() {
    const [cep, setCep] = useState(null)
    const [inicio, setInicio] = useState(null)
    const [fim, setFim] = useState(null)

    const {data, error} = useSWR([cep, inicio, fim], fetcher);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setCep(cep)
        setInicio(inicio)
        setFim(fim)
        // setApi(`https://motofast-api.herokuapp.com/locais/proximos/${cep}/inicio/${inicio}/fim/${fim}`)
        // alert(`cep ${cep} inicio ${inicio} fim ${fim}`)
    }

    // there should be no `undefined` state
    console.log("Is data ready?", !!data);

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
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
                    <label>
                        CEP:
                        <input
                            type="text"
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />
                    </label>
                    <label>
                        Data Início:
                        <input
                            type="text"
                            value={inicio}
                            onChange={e => setInicio(e.target.value)}
                        />
                    </label>
                    <label>
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
                    {data.map(local => {
                        if (local.motos <= 0) return
                        return (
                            <li style={{listStyle: "none", border: "1px solid black", padding: "1em", margin: "1em"}}>
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
        <SWRConfig value={{ fallback }}>
            <Repo />
        </SWRConfig>
    )
}
