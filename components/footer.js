import { Col, Row } from "react-bootstrap";
import styles from '../styles/Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import logo from '../public/motofast.png'
import fb from '../public/fb-icon.png'
import wp from '../public/wp-icon.png'
import ig from '../public/ig-icon.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Row className={styles.footerRow}>
                <Col className={styles.leftCol}>
                    <div>
                        <span className={styles.contactInfo}>Rua Rosa Siqueira, 333 -<br />
                        Vila Agostinho, São Paulo - SP</span>
                    </div>
                    <div>
                        <span className={styles.wpSupport}>Suporte via Whatsapp</span><br />
                        <span className={styles.contactInfo}>(11) 3322-0001</span>
                    </div>
                </Col>
                <Col xs={5} className={styles.middleCol}>
                    <div>
                        <p className={styles.redesSociais}>NOS SIGA NAS NOSSAS REDES SOCIAIS!</p>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <Image layout="fixed" src={fb} alt="logo facebook"/>
                        </div>
                        <div className={styles.icon}>
                            <Image layout="fixed" src={wp} alt="logo whatsapp"/>
                        </div>
                        <div className={styles.icon}>
                            <Image layout="fixed" src={ig} alt="logo instagram"/>
                        </div>
                    </div>
                </Col>
                <Col className={styles.rightCol}>
                    <Image layout="fixed" width={241} height={241*314/696} src={logo} alt="logo da motofast"/>
                </Col>
            </Row>
            <Row className={styles.footerRow}>
                <Col className={styles.leftCol}>
                    <span className={styles.termos}>TERMOS DE USO</span>
                </Col>
                <Col xs={5} className={styles.middleCol}>
                    <p className={styles.termos}>POLÍTICA DE PRIVACIDADE</p>
                </Col>
                <Col className={styles.rightCol}>
                    <p className={styles.termos}>CONTRATO DE LOCAÇÃO</p>
                </Col>
            </Row>
            <Row className={styles.footerRow}>
                <p className={styles.bottomText}>2021 – MOTOFASTER LOCAÇÃO DE VEÍCULOS LTDA CNPJ: 55.200.111/0001-21</p>
            </Row>
        </footer>
    )
}