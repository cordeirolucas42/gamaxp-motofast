import { Col, Row } from "react-bootstrap";
import Image from "next/dist/client/image";
import styles from '../styles/Dados.module.css'

export default function Dados({foto, titulo, nome, cnh, endereco1, endereco2}) {
    return (
        <Row className={styles.dados}>
            <Col xs={4} className={styles.foto}>
                <Image layout="fixed" width={350} height={350} src={foto} alt="logo da motofast"/>
            </Col>
            <Col xs={1}></Col>
            <Col xs={7} className={styles.detalhes}>
                <h2 className={styles.detalhesTitulo}>{titulo}</h2>
                <div className={styles.detalhesConteudo}>
                    <p className={styles.label}>Nome</p>
                    <p className={styles.text}>{nome}</p>

                    <p className={styles.label}>CNH</p>
                    <p className={styles.text}>{cnh}</p>

                    <p className={styles.label}>Endereço</p>
                    <p className={styles.text}>{endereco1}<br />
                    {endereco2}</p>

                    <div className={styles.botaoEditar}>
                        <a href="#" className={styles.editar}>Editar</a>
                    </div>
                </div>
            </Col>
        </Row>
    )    
}