/* eslint-disable react/no-danger */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import type { DocumentContext } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body style={{ backgroundColor: '#25282c' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
