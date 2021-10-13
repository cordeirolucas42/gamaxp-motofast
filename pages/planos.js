import styles from '../styles/Planos.module.css'
import moto from '../public/parceiro.png'
import local from '../public/local.png'
import lupa from '../public/lupa.png'
import arrows from '../public/arrows.png'
import { useState } from 'react'
import Layout from '../components/layout'
import Image from "next/dist/client/image";

const fetcher = async (api) => {
    const [cep, inicio, fim] = api
    console.log(cep, inicio, fim)
    const res = await fetch(`https://motofast-api.herokuapp.com/locais/proximos/${cep}/inicio/${inicio}/fim/${fim}`)
    return await res.json()
}

export default function Home() {
    const [cep, setCep] = useState("")
    const [inicio, setInicio] = useState("")
    const [fim, setFim] = useState("")

    const [locais, setLocais] = useState([])

    const handleSubmit = async (evt) => {
        console.log("handleSubmit")
        evt.preventDefault();
        setLocais(await fetcher([cep, inicio, fim]))        
    }

    return (
        <Layout>
            <div className={styles.planos}>
                <h2 className={styles.title}>
                    Planos
                </h2>

                <p className={styles.subtitle}>Vamos simular o plano perfeito da Motofast para você?</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.local}>
                        <Image src={local} alt="ícone de local"/>
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="name" className={styles.label}>Sua localização</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="05124-000"
                            className={styles.textInput}
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />
                    </div>

                    <hr className={styles.mobileLineBreak} />

                    <div className={styles.input}>
                        <label htmlFor="inicio" className={styles.label}>Data início</label>
                        <input
                            id="inicio"
                            type="text"
                            placeholder="qui., 14 de out."
                            className={styles.textInput}
                            value={inicio}
                            onChange={e => setInicio(e.target.value)}
                        />
                    </div>
                    <div className={styles.arrows}>
                        <Image src={arrows} alt="ícone de setas"/>
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="fim" className={styles.label}>Data final</label>
                        <input
                            id="fim"
                            type="text"
                            placeholder="qui., 14 de out."
                            className={styles.textInput}
                            value={fim}
                            onChange={e => setFim(e.target.value)}
                        />
                    </div>

                    <button className={styles.submit} type="submit">
                        <Image width={37} height={37} src={lupa} alt="ícone de lupa"/>
                    </button>
                </form>

                {locais.map(local => {
                    if (local.motos <= 0) return
                    return (
                        <div key={local.endereco} className={styles.ponto}>
                            <h3 className={styles.nome}>Ponto 1 - ZONA NORTE</h3>
                            <div className={styles.infos}>
                                <div className={styles.col}>
                                    <div className={styles.moto}>
                                        <Image layout="fixed" src={moto} alt="ícone de moto"/>
                                        <span className={styles.qty}>{local.motos}</span>
                                        <span className={styles.texto}>&nbsp;motofast disponíveis</span>
                                    </div>
                                    {/* <p className={styles.endereco}>{local.endereco}</p> */}
                                    <p className={styles.endereco}>Av. Jardim América, 122 - Pq. Flores </p>
                                </div>
                                <div className={styles.col}>
                                    <p className={styles.plano}>Plano Semanal</p>
                                    <p className={styles.preco}><span className={styles.destaque}>R$37,</span>99/Dia</p>
                                    <p className={styles.descricao}>Nesse plano você paga o total de <span className={styles.total}>R$265,93</span></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>            
        </Layout>
    )
}
