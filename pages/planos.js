import styles from '../styles/Planos.module.css'
import moto from '../public/parceiro.png'
import pin from '../public/local.png'
import lupa from '../public/lupa.png'
import arrows from '../public/arrows.png'
import { useState } from 'react'
import Layout from '../components/layout'
import Image from "next/dist/client/image";

const fetcher = async (api) => {
    const [cep, inicio, fim] = api
    const res = await fetch(`https://motofast-api.herokuapp.com/locais/proximos/${cep}/inicio/${inicio}/fim/${fim}`)
    return await res.json()
}

const cepDisplay = (cep) => (
    cep.includes("-") ?
    cep :
    cep.slice(0,5) + "-" + cep.slice(5)
)

const melhorPlano = (inicio, fim) => {
    const planos = [
        { nome: "Diário", preco: 44, cents: 99, dias: 1, total: "R$265,93" },
        { nome: "Semanal", preco: 37, cents: 99, dias: 7, total: "R$1.049,70" },
        { nome: "Mensal", preco: 34, cents: 99, dias: 30, total: "R$2.699,10" },
        { nome: "Trimestral", preco: 29, cents: 99, dias: 90, total: "R$4.498,20" },
        { nome: "Semestral", preco: 24, cents: 99, dias: 180, total: "R$265,93" },
        { nome: "Anual", preco: 19, cents: 99, dias: 365, total: "R$7.196,40" },
    ]
    const periodo = (new Date(fim) - new Date(inicio)) / (1000 * 60 * 60 * 24)

    return planos.filter(plano => plano.dias > periodo)[0]
}

export default function Home() {
    const [cep, setCep] = useState("")
    const [inicio, setInicio] = useState("")
    const [fim, setFim] = useState("")
    const [plano, setPlano] = useState({ nome: "Diário", preco: 44.99, dias: 1 })

    const [local, setLocal] = useState({})

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setPlano(melhorPlano(inicio, fim))
        setLocal(await fetcher([cep.split("-").join(""), inicio, fim]))
        setCep(cepDisplay(cep))
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
                        <Image src={pin} alt="ícone de local" />
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
                            type="date"
                            className={styles.textInput}
                            value={inicio}
                            onChange={e => setInicio(e.target.value)}
                        />
                    </div>
                    <div className={styles.arrows}>
                        <Image src={arrows} alt="ícone de setas" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="fim" className={styles.label}>Data final</label>
                        <input
                            id="fim"
                            type="date"
                            className={styles.textInput}
                            value={fim}
                            onChange={e => setFim(e.target.value)}
                        />
                    </div>

                    <button className={styles.submit} type="submit">
                        <Image width={37} height={37} src={lupa} alt="ícone de lupa" />
                    </button>
                </form>

                {local.endereco &&
                    <div className={styles.ponto}>
                        <h3 className={styles.nome}>Ponto 1 - Zona {local.zona}</h3>
                        <div className={styles.infos}>
                            <div className={styles.col}>
                                <div className={styles.moto}>
                                    <Image layout="fixed" src={moto} alt="ícone de moto" />
                                    <span className={styles.qty}>{local.motos}</span>
                                    <span className={styles.texto}>&nbsp;motofast {local.motos > 1 ? "disponíveis" : "disponível"}</span>
                                </div>
                                <p className={styles.endereco}>{local.endereco}</p>
                            </div>
                            <div className={styles.col}>
                                <p className={styles.plano}>Plano {plano.nome}</p>
                                <p className={styles.preco}><span className={styles.destaque}>R${plano.preco},</span>{plano.cents}/Dia</p>
                                <p className={styles.descricao}>Nesse plano você paga o total de <span className={styles.total}>{plano.total}</span></p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}
