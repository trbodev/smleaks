/* eslint-disable react/no-danger */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { GoogleFonts } from 'next-google-fonts';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
        <body style={{ backgroundColor: '#25282c' }}>
          <noscript>
            <div dangerouslySetInnerHTML={{
              __html: `
              <style>#__next {display: none;}</style>
              `,
            }}
            />
            <h1 style={{
              marginLeft: 10, color: 'whitesmoke', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', fontWeight: '400',
            }}
            >
              This website is designed for use with JavaScript
              {' '}
              <b><i>ENABLED!</i></b>
            </h1>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
