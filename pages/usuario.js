import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Pontos from "../components/pontos";
import styles from '../styles/Usuario.module.css'
import usuario from '../public/usuario.png'
import Dados from "../components/dados";

export default function Usuario() {
    return (
        <Layout>
            <div className={styles.usuario}>
                <Dados
                    foto={usuario}
                    titulo="Sua conta - Aluguel"
                    nome="Angelina Jolie"
                    cnh="00022233367"
                    endereco1="Rua Jardim Felicidade, 333 - Pq. Ibirapuera,"
                    endereco2="São Paulo SP - 05114-00"
                />
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