import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Parceiros() {
    const [zona, setZona] = useState("")
    const [turno, setTurno] = useState("")

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
            [1,2,3,4,5].forEach(i => (
                parceiros.push({
                    nome: `Nome ${i}`,
                    zona: zona,
                    turno: turno.turno,
                    horario: turno.horario
                })
            ))
        ))
    ))
        
    return (
        <>
        <DropdownButton id="zona" title="Zona">
            {zonas.map(zona => (
                <Dropdown.Item onClick={e => setZona(zona)}>{zona}</Dropdown.Item>
            ))}
        </DropdownButton>
        <DropdownButton id="turno" title="Turno">
            {turnos.map(turno => (
                <Dropdown.Item onClick={e => setTurno(turno.turno)}>{turno.turno}</Dropdown.Item>
            ))}
        </DropdownButton>
        <ul>
            {parceiros
            .filter(p => p.zona.includes(zona) && p.turno.includes(turno))
            .map(parceiro => (
                <li>{parceiro.nome} - Zona: {parceiro.zona} - Horário Disponível: {parceiro.horario}</li>
            ))}
        </ul>
        </>
    )
}