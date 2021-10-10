import Parceiros from "../components/parceiros";
import styles from '../styles/Empresa.module.css'
import empresa from '../public/empresa.png'
import Layout from "../components/layout";
import Dados from "../components/dados";

export default function Empresa() {
    return (
      <Layout>
        <div className={styles.empresa}>
          <Dados
            foto={empresa}
            titulo="Sua conta - Empresa"
            nome="Hugh Jackman"
            cnh="11125533399"
            endereco1="Rua Felicio, 55 - Vila Buarque,"
            endereco2="São Paulo SP - 010240-11"
          />
          <Parceiros/>
        </div>
      </Layout>
    )
}