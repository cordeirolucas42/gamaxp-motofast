import styles from '../styles/Motofaster.module.css'
import moto from '../public/parceiro.png'
import wpp from '../public/wpp.png'
import Image from "next/dist/client/image";
import { Col, Row } from 'react-bootstrap';

export default function Historico() {
    return (
        <Row className={styles.historico}>
            <Col className={styles.trabalho} xs={12} lg={5}>
                <div className={styles.header}>
                    <Image layout="fixed" src={moto} alt="ícone de moto"/>
                    <span>Hugh Jackman</span>
                    <span>Zona: Norte</span>
                    <Image layout="fixed" width={30} height={34} src={wpp} alt="logo do whatsapp"/>
                </div>
                <div className={styles.infos}>
                    Horário Trabalhado: 06:00 - 12:00
                </div>
                <div className={styles.infos}>
                    Dia Trabalhado: 05.08.21
                </div>
            </Col>
            <Col className={styles.trabalho} xs={12} lg={5}>
                <div className={styles.header}>
                    <Image layout="fixed" src={moto} alt="ícone de moto"/>
                    <span>Hugh Jackman</span>
                    <span>Zona: Norte</span>
                    <Image layout="fixed" width={30} height={34} src={wpp} alt="logo do whatsapp"/>
                </div>
                <div className={styles.infos}>
                    Horário Trabalhado: 06:00 - 12:00
                </div>
                <div className={styles.infos}>
                    Dia Trabalhado: 05.08.21
                </div>
            </Col>
            
            <Col className={styles.trabalho} xs={12} lg={5}>
                <div className={styles.header}>
                    <Image layout="fixed" src={moto} alt="ícone de moto"/>
                    <span>Hugh Jackman</span>
                    <span>Zona: Norte</span>
                    <Image layout="fixed" width={30} height={34} src={wpp} alt="logo do whatsapp"/>
                </div>
                <div className={styles.infos}>
                    Horário Trabalhado: 06:00 - 12:00
                </div>
                <div className={styles.infos}>
                    Dia Trabalhado: 05.08.21
                </div>
            </Col>
            <Col className={styles.trabalho} xs={12} lg={5}>
                <div className={styles.header}>
                    <Image layout="fixed" src={moto} alt="ícone de moto"/>
                    <span>Hugh Jackman</span>
                    <span>Zona: Norte</span>
                    <Image layout="fixed" width={30} height={34} src={wpp} alt="logo do whatsapp"/>
                </div>
                <div className={styles.infos}>
                    Horário Trabalhado: 06:00 - 12:00
                </div>
                <div className={styles.infos}>
                    Dia Trabalhado: 05.08.21
                </div>
            </Col>
        </Row>
    )
}