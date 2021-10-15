import { Col, Row } from 'react-bootstrap'
import styles from '../styles/Usuario.module.css'

export default function Pontos() {
    const pontos = [
        {
            titulo: "Ponto 1 - ZONA NORTE",
            endereco: "Rua Correia de Melo, 98 -",
            bairro: "Bom Retiro"
        },
        {
            titulo: "Ponto 2 - ZONA SUL",
            endereco: "R. Bela Vista, 857 -",
            bairro: "Santo Amaro"
        },
        {
            titulo: "Ponto 3 - ZONA LESTE",
            endereco: "Rua Padre Estevão Pernet, 420 -",
            bairro: "Vila Gomes Cardim"
        },
        {
            titulo: "Ponto 4 - ZONA OESTE",
            endereco: "R. Heitor Penteado, 1833 -",
            bairro: "Sumarezinho"
        },
        {
            titulo: "Ponto 5 - CENTRO",
            endereco: "Praça Dr. João Mendes, 24 -",
            bairro: "Centro Histórico de São Paulo"
        }
    ]

    return (
        <div>
            <h2 className={styles.titulo}>PONTOS DE ENTREGA</h2>
            <Row>
                {pontos.map((ponto, idx) => (
                    <Col xs={6} lg={12} key={idx}>
                        <div className={styles.pontoTitulo}>{ponto.titulo}</div>
                        <div className={styles.pontoEndereco}>{ponto.endereco}<br />
                        {ponto.bairro}</div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}