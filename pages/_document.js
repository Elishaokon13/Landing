import Document, { Head, Main, NextScript } from 'next/document'

// import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        // const sheet = new ServerStyleSheet()
        // const originalRenderPage = ctx.renderPage

        // try {
        //   ctx.renderPage = () =>
        //     originalRenderPage({
        //       enhanceApp: (App) => (props) =>
        //         sheet.collectStyles(<App {...props} />),
        //     })

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            // styles: (
            //   <>
            //     {initialProps.styles}
            //     {sheet.getStyleElement()}
            //   </>
            // ),
        }
        // } finally {
        //   sheet.seal()
        // }
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    {/* <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            /> */}
                    {/* <script
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            /> */}
                    <title>TGC | The Growth Conference</title>
                    <meta name="description" content="The growth Conference" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}