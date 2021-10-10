import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import logo from '../public/motofast.png'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <Link href="/">
                <a className={styles.logo}><Image width={361} height={361*314/696} src={logo} alt="logo da motofast"/></a>
            </Link>
            <div className={styles.items}>
                <Link href="#"><a className={styles.item}>Como funciona</a></Link>
                <Link href="/planos"><a className={styles.item}>Planos</a></Link>
                <Link href="#"><a className={styles.conta}>Sua conta</a></Link>
            </div>
        </nav>
    )
}