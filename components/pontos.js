import styles from '../styles/Usuario.module.css'

export default function Pontos() {
    const pontos = [
        {
            titulo: "Ponto 1 - ZONA NORTE",
            endereco: "Av. Jardim América, 122 -",
            bairro: "Pq. Flores"
        },
        {
            titulo: "Ponto 2 - ZONA SUL",
            endereco: "Av. Jardim Sul, 111 -",
            bairro: "Pq. da Floresta"
        },
        {
            titulo: "Ponto 3 - ZONA LESTE",
            endereco: "Av. Jardim México, 100 -",
            bairro: "Pq. das Árvores"
        },
        {
            titulo: "Ponto 4 - ZONA OESTE",
            endereco: "Av. Jardim Espanhol, 333 -",
            bairro: "Pq. Belo"
        },
        {
            titulo: "Ponto 5 - CENTRO",
            endereco: "Av. Jardim Europa, 333 ",
            bairro: "Pq. Formosa"
        }
    ]

    return (
        <div>
            <h2 className={styles.titulo}>PONTOS DE ENTREGA</h2>
            {pontos.map((ponto, idx) => (
                <div key={idx}>
                    <div className={styles.pontoTitulo}>{ponto.titulo}</div>
                    <div className={styles.pontoEndereco}>{ponto.endereco}<br />
                    {ponto.bairro}</div>
                </div>
            ))}
        </div>
    )
}