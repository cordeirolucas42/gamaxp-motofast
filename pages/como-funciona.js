import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Comofunciona.module.css'
import locate from '../public/locate.png'
import escolha from '../public/escolha.png'
import preencha from '../public/preencha.png'
import motor from '../public/motor.png'
import tel from '../public/tel.png'
import preenchaok from '../public/preenchaok.png'
import alarm from '../public/alarm.png'
import nossamoto from '../public/nossamoto.png'

export default function Home() {
	return (
		<Layout>
			<div className={styles.comofunciona}>
				<h2 className={styles.title}>
					COMO FUNCIONA
				</h2>
				<div className={styles.boxsoptions}>
					<h2 className={styles.comofuncionatitles}>ALUGUE UMA MOTOFASTER</h2>
					<div className={styles.info}>
						<p>Acreditamos que tudo é possível com um pouco de coragem, força e agilidade. Por isso juntamos tudo isso em um só serviço, que te garante flexibilidade, melhor custo-benefício e segurança na hora de alugar sua moto.</p><p>Veja como é fácil: </p>
						<div className={styles.infos}><Image width={14} height={20} src={locate} />
							<p>Coloque o seu CEP e localize a motofast mais próxima</p>
						</div>
						<div className={styles.infos}><Image width={15} height={21} src={escolha} />
							<p>Escolha o plano que mais combina com você</p>
						</div>
						<div className={styles.infos}><Image width={18} height={20} src={preencha} />
							<p>Faça o seu cadastro (leva apenas alguns minutinhos)</p>
						</div>
						<div className={styles.infos}><Image width={27} height={19} src={motor} />
							<p>Retire a sua moto e comece a pilotar!</p>
						</div>
					</div>
				</div>
				<div className={styles.boxsoptions}>
					<h2 className={styles.comofuncionatitles}>QUERO UM MOTOFASTER</h2>
					<div className={styles.info}>
						<p>Acreditamos que tudo é possível com um pouco de coragem, força e agilidade. Por isso juntamos tudo isso em um só serviço, que te garante flexibilidade, melhor custo-benefício e segurança na hora de alugar sua moto.</p><p>Veja como é fácil: </p>
						<div className={styles.infos}><Image width={14} height={20} src={locate} />
							<p>Coloque o seu CEP e localize a motofast mais próxima</p>
						</div>
						<div className={styles.infos}><Image width={15} height={21} src={escolha} />
							<p>Escolha o plano que mais combina com você</p>
						</div>
						<div className={styles.infos}><Image width={18} height={20} src={preencha} />
							<p>Faça o seu cadastro (leva apenas alguns minutinhos)</p>
						</div>
						<div className={styles.infos}><Image width={27} height={19} src={motor} />
							<p>Retire a sua moto e comece a pilotar!</p>
						</div>
					</div>
				</div>
				<div className={styles.boxsoptions}>
					<h2 className={styles.comofuncionatitles}>ENCONTRAR UM MOTOFASTER</h2>
					<div className={styles.info}>
						<p>
							Somos a melhor opção para você, proprietário de empresa de pequeno ou médio porte que não tem frota própria mas que tem vontade de reduzir custos e otimizar as suas entregas.</p><p>Como funciona?</p>
						<div className={styles.infos}><Image width={18} height={20} src={preencha} />
							<p>Faça o seu cadastro (leva apenas alguns minutinhos)</p>
						</div>
						<div className={styles.infos}><Image width={21} height={21} src={tel} />
							<p>Entre em contato com o motofaster mais próximo</p>
						</div>
						<div className={styles.infos}><Image width={18} height={20} src={preenchaok} />
							<p>Tenha acesso a uma lista de motofasters.</p>
						</div>
						<div className={styles.infos}><Image width={20} height={20} src={alarm} />
							<p>Agilize as suas entregas e leve sua empresa para todos os cantos!</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.nossasmotos}>
				<h2 className={styles.title}>
					NOSSAS MOTOS
				</h2>
				<p className={styles.nossasmotostitle}>Toda a nossa frota é do modelo Honda Pop110i, eleita uma das motos mais vendidas do Brasil.  Chamando a atenção pela sua economia, essa motocicleta pode fazer até 60 km com 1 litro de combustível. </p>
				<div className={styles.boxsnossasmotos}>
					<div className={styles.one}>Modelo 2021</div>
					<div className={styles.two}>Econômica 45 a 60 km por litro</div>
					<div className={styles.tree}>Garantia e Qualidade Honda</div>
				</div>
				<Image width={942} height={510} src={nossamoto} />
				<div className={styles.boxsnossasmotos}>
					<div className={styles.four}>Freios CBS</div>
					<div className={styles.five}>Motor Forte com 110c</div>
					<div className={styles.six}>Injeção Eletrônica</div>
				</div>
			</div>
		</Layout>
	)
}
