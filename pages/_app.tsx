import React from 'react';
import Head from 'next/head';

/* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';
//
// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

import '../styles/globals.css';
// eslint-disable-next-line import/no-unresolved
import '@ionic/react/css/core.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>test app</title>
        <meta name="description" content="test app" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no,  viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Component {...pageProps} />

    </>
  );
}
