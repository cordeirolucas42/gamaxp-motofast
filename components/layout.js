import Head from 'next/head'
import Footer from "./footer";
import Menu from "./menu";
import SSRProvider from 'react-bootstrap/SSRProvider';

export default function Layout({children}) {
    return (
        <SSRProvider>
            <Head>
                <title>motofast</title>
                <meta name="description" content="Aluguel de motos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Menu/>

            <main>
                {children}
            </main>

            <Footer/>
        </SSRProvider>
    )
}