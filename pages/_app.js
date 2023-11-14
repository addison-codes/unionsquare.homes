import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import 'styles/main.scss';

function App({ Component, pageProps }) {
      return (
            <>
                  <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                        <meta name="description" content="Union Square Condos" />
                        <meta name="keywords" content="Union Square Condos, Union Square, Union Square Condos Grand Rapids, Union Square Condos Grand Rapids MI, Union Square Condos, Condos Grand Rapids, Downtown Grand Rapids, Condos Downtown Grand Rapids" />
                        <title>Union Square Condos</title>
                  </Head>
                  <Script src='https://www.googletagmanager.com/gtag/js?id=G-95QBVYP6JD'/>
                  <Script id='google-analytics' strategy='afterInteractive'>
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-95QBVYP6JD');
                        `}
                  </Script>
            <Component {...pageProps} />
            </>
      );
    }

export default App