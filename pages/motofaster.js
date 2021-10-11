import Historico from "../components/historico";
import styles from '../styles/Motofaster.module.css'
import motofaster from '../public/motofaster.png'
import Layout from "../components/layout";
import Dados from "../components/dados";

export default function Motofaster() {
    return (
      <Layout>
        <div className={styles.motofaster}>
            <Dados
                foto={motofaster}
                titulo="Sua conta - Motofaster"
                nome="Daniel Frank"
                cnh="4442578310"
                endereco1="Rua Andrade Bento, 65 - Vila Buarque,"
                endereco2="São Paulo SP - 010240-00"
            />
            <h2 className={styles.titulo}>MOTOFASTER</h2>
            <h2 className={styles.titulo}>PARCEIROS</h2>
            <a href="#" className={styles.botao}>HISTÓRICO</a>
            <Historico/>
        </div>
      </Layout>
    )
}