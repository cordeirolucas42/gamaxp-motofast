import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useState } from 'react';
import styles from '../styles/Empresa.module.css'
import moto from '../public/parceiro.png'
import wpp from '../public/wpp.png'
import Image from "next/dist/client/image";

const fetcher = async (api) => {
    const [zona, turno] = api
    const res = await fetch(`https://motofast-api.herokuapp.com/motofasters/zona/${zona}/turno/${turno}`)
    const motofasters = await res.json()
    return motofasters
}

export default function Parceiros() {
    const [zona, setZona] = useState("Norte")
    const [turno, setTurno] = useState("Tarde")

    const [parceiros, setParceiros] = useState([])

    const zonas = ["Norte", "Sul", "Leste", "Oeste", "Centro"]
    const turnos = {
        "Manhã": "06:00 - 12:00",
        "Tarde": "12:00 - 18:00",
        "Noite": "18:00 - 00:00",
        "Madrugada": "00:00 - 06:00"
    }

    const handleFilter = async (eventKey, event) => {
        event.preventDefault();
        if (zonas.includes(event.target.id)) {
            setZona(event.target.id)
            setParceiros(await fetcher([event.target.id, turno]))
        } else if (Object.keys(turnos).includes(event.target.id)) {
            setTurno(event.target.id)
            setParceiros(await fetcher([zona, event.target.id]))
        }
    }
        
    return (
        <div className={styles.parceiros}>
            <p><span className={styles.titulo}>MOTOFASTER </span>
            <span className={styles.titulo}>PARCEIROS</span></p>

            <div className={styles.botoes}>
                <DropdownButton id={styles.zona} title="Zona" onSelect={handleFilter}>
                    {zonas.map((zona, index) => (
                        <Dropdown.Item key={index} id={zona}>{zona}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton id={styles.turno} title="Horários" onSelect={handleFilter}>
                    {Object.keys(turnos).map((turno, index) => (
                        <Dropdown.Item key={index} id={turno}>{turno}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>

            {parceiros && parceiros.map((parceiro, index) => (
                <div key={index} className={styles.parceiro}>
                    <div className={styles.parceiroNome}>
                        <Image layout="fixed" src={moto} alt="ícone de moto"/>
                        <span className={styles.parceiroTexto}>{parceiro.nome}</span>
                    </div>
                    <div className={styles.parceiroInfos}>
                        <span className={styles.parceiroTexto}>
                            Zona: {parceiro.zona}
                        </span>
                        <span className={styles.parceiroTexto}>
                            Horário Disponível: <span>{turnos[parceiro.turno]}</span>
                        </span>
                        <a href="#">
                            <Image layout="fixed" width={30} height={34} src={wpp} alt="logo do whatsapp"/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}