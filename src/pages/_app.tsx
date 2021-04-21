import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>POC - NextJS + Redux - gabriel-barreto</title>
        <meta
          name="description"
          content="Modi sed exercitationem ut corrupti nisi asperiores eum. Ut aliquid temporibus perferendis accusantium tempora laudantium. Sit rerum libero. Earum eius placeat qui porro et odit deleniti velit qui. Sit dolor modi et et quia sunt omnis dolorum."
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
