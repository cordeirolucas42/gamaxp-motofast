import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useState } from 'react';
import styles from '../styles/Empresa.module.css'
import moto from '../public/parceiro.png'
import wpp from '../public/wpp.png'
import Image from "next/dist/client/image";

export default function Parceiros() {
    const [zona, setZona] = useState("Norte")
    const [turno, setTurno] = useState("Tarde")

    const nomes = ["Luana Silveira", "Mayara Castro", "Daniel Frank"]
    const zonas = ["Norte", "Sul", "Leste", "Oeste", "Centro"]
    const turnos = [
        {turno: "Manhã", horario: "6h - 12h"},
        {turno: "Tarde", horario: "12h - 18h"},
        {turno: "Noite", horario: "18h - 00h"},
        {turno: "Madrugada", horario: "00h - 6h"}
    ]
    const parceiros = []
    zonas.forEach(zona => (
        turnos.forEach(turno => (
            [1,2,3].forEach(i => (
                parceiros.push({
                    nome: nomes[i-1],
                    zona: zona,
                    turno: turno.turno,
                    horario: turno.horario
                })
            ))
        ))
    ))
        
    return (
        <div className={styles.parceiros}>
            <h2 className={styles.titulo}>MOTOFASTER</h2>
            <h2 className={styles.titulo}>PARCEIROS</h2>

            <div className={styles.botoes}>
                <DropdownButton id={styles.zona} title="Zona">
                    {zonas.map((zona, index) => (
                        <Dropdown.Item key={index} onClick={e => setZona(zona)}>{zona}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton id={styles.turno} title="Horários">
                    {turnos.map((turno, index) => (
                        <Dropdown.Item key={index} onClick={e => setTurno(turno.turno)}>{turno.turno}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>

            {parceiros
            .filter(p => p.zona.includes(zona) && p.turno.includes(turno))
            .map((parceiro, index) => (
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
                            Horário Disponível: {parceiro.horario}
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