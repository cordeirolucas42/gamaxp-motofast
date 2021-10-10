import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Pontos from "../components/pontos";
import styles from '../styles/Usuario.module.css'
import Image from "next/dist/client/image";
import usuario from '../public/usuario.png'

export default function Usuario() {
    return (
        <Layout>
            <div className={styles.usuario}>
                <Row className={styles.dados}>
                    <Col xs={4} className={styles.foto}>
                        <Image layout="fixed" width={350} height={350} src={usuario} alt="logo da motofast"/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={7} className={styles.detalhes}>
                        <h2 className={styles.detalhesTitulo}>Sua conta - Aluguel</h2>
                        <div className={styles.detalhesConteudo}>
                            <p className={styles.label}>Nome</p>
                            <p className={styles.text}>Angelina Jolie</p>

                            <p className={styles.label}>CNH</p>
                            <p className={styles.text}>00022233367</p>

                            <p className={styles.label}>Endereço</p>
                            <p className={styles.text}>Rua Jardim Felicidade, 333 - Pq. Ibirapuera,<br />São Paulo SP - 05114-00</p>

                            <div className={styles.botaoEditar}>
                                <a href="#" className={styles.editar}>Editar</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.infos}>
                    <Col xs={5}>
                        <Pontos/>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={5}>
                        <div className={styles.alugueis}>
                            <h2 className={styles.titulo}>ALUGUÉIS</h2>
                            <div className={styles.aluguel}>
                                Aluguel Atual: 10/10/21
                            </div>
                            <div className={styles.aluguel}>
                                Aluguel Passado: 20/09/21
                            </div>
                            <div className={styles.aluguel}>
                                Aluguel Passado: 03/06/21
                            </div>
                        </div>
                        <div className={styles.prazo}>
                            <h2 className={styles.titulo}>PRAZO</h2>
                            <div className={styles.circle}>10 DIAS</div>
                            <a href="#" className={styles.renovacao}>Renovação</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}