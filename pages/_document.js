import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;600&family=Inter:wght@300&family=Manrope:wght@400;500;600&family=Montserrat&family=Open+Sans&family=Poppins:wght@300&family=Princess+Sofia&display=swap"
          rel="stylesheet"></link> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue&family=Open+Sans&family=Poppins:wght@300&family=Princess+Sofia&display=swap"
          rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
