import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import Dropdown from "react-bootstrap/Dropdown";
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
                <Dropdown>
                    <Dropdown.Toggle id={styles.conta}>
                        Sua conta
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="/usuario">Aluguel</Dropdown.Item>
                        <Dropdown.Item href="/empresa">Empresa</Dropdown.Item>
                        <Dropdown.Item href="/motofaster">Motofaster</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    )
}