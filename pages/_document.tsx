import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </Html>
    )
  }
}

export default MyDocument
