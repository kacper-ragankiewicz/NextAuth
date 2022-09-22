import Head from 'next/head';
import styles from './Page.module.scss';

// Components
import Header from '../Header';
import Footer from '../Footer';

export default function Wrapper({children}) {
    return (
        <>
            <Head>
                <title>FindUrURL</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
}