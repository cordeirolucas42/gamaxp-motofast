import Image from 'next/image'
import logo from '../public/motofast.png'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import agilidade from '../public/agilidade.png'
import seguranca from '../public/seguranca.png'
import economia from '../public/economia.png'
import facilidade from '../public/facilidade.png'

export default function Home() {
  return (
    <Layout>
		<div className={styles.background}>
			<div className={styles.boxhome}>
				<div className={styles.imgconfig}>
				<Image width={300} height={300*314/696} src={logo} alt="logo da motofast"/>
				<p>A FORMA MAIS RÁPIDA DE IR EM BUSCA DOS SEUS SONHOS.</p>
				</div>
			</div>
		</div>
		<div className={styles.pqalugar}>
                <h2 className={styles.title}>
                    POR QUE ALUGAR?
                </h2>
				<div className={styles.centralizador}>
				<div className={styles.boxsoptions}>
				<div className={styles.agiimg}></div>
				<h2 className={styles.agilidade}>AGILIDADE</h2>
				<p>Todo o processo é feito digitalmente, sem análise de crédito e sem burocracias!</p>
				</div>
				<div className={styles.boxsoptions}>
				<div className={styles.seguimg}></div>
				<h2 className={styles.seguranca}>SEGURANÇA</h2>
				<p>Contamos com seguro, manutenções preventivas e assistência 24 horas. Tudo incluso no aluguel.</p>
				</div>
				<div className={styles.boxsoptions} id="ajuste">
				<div className={styles.ecoimg}></div>
				<h2 className={styles.economia}>ECONOMIA</h2>
				<p>Planos a partir de R$19,99/Dia* e motos super econômicas para você gastar menos e lucrar muito mais.</p>
				</div>
				<div className={styles.boxsoptions}>
				<div className={styles.faciimg}></div>
				<h2 className={styles.facilidade}>FACILIDADE</h2>
				<p>Estamos localizados em vários estacionamentos ao lado das estações de metrô. Escolha o local mais próximo e retire sua motofast.</p>
				</div>
				</div>
		</div>
		<div className={styles.tresmodas}>
                <h2 className={styles.title}>
                    TEMOS TRÊS TIPOS DE MODALIDADES
                </h2>
				<div className={styles.centralizador2}>
				<div className={styles.boxsoptionsmodes}>
				<h1 className={styles.number}>1</h1>
				<h2>ALUGAR MOTO</h2>
				<p>Alugue nossas motos de maneira agil, segura, economica e com facilidade!</p>
				<a href="#" className={styles.optresmodas}>QUERO ALUGAR</a>
				</div>
				<div className={styles.boxsoptionsmodes}>
				<h1 className={styles.number}>2</h1>
				<h2>MOTOFASTER</h2>
				<p>Seja um Motofaster. Tenha empresas que irão te contratar para trabalhar na área e horário que você quiser!</p>
				<a href="#" className={styles.optresmodas2}>QUERO SER MOTOFASTER</a>
				</div>
				<div className={styles.boxsoptionsmodes}>
				<h1 className={styles.number}>3</h1>
				<h2>PARA EMPRESA</h2>
				<p>Encontre um Motofaster para a sua empresa, de acordo com a sua região!</p>
				<a href="#" className={styles.optresmodas3}>QUERO UM MOTOFASTER</a>
				</div>
				</div>
		</div>
    </Layout>
  )
}
