
import styles from '../styles/Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import logo from '../public/motofast.png'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <a href="/" className={styles.logo}>
                <Image width={361} height={361*314/696} src={logo} alt="logo da motofast"/>
            </a>
            <div className={styles.items}>
                <a href="#" className={styles.item}>Como funciona</a>
                <a href="/planos" className={styles.item}>Planos</a>
                <a href="#" className={styles.conta}>Sua conta</a>
            </div>
        </nav>
    )
}