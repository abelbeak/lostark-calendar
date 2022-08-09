import '../styles/reset.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>LostArk Calendar</title>
                <meta name="description" content="LostArk Calendar - Made by Abel Beak" />
                <link
                    rel="icon"
                    href="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/icon/favicon-192.png?v=20220803162139"
                    sizes="192x192"
                />
            </Head>
            <Component {...pageProps}></Component>
        </>
    );
}

export default MyApp;
