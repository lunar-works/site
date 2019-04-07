import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )

    const styleTags = sheet.getStyleElement();

    return { ...page,  styleTags }
  }

  render() {
    return (
      <html>
        <title>Lunarworks | Consultancy</title>
        <Head>
            
            <meta name="description" content="" />
            <meta name="keywords" content=""/>            
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <link rel="canonical" href="" />


            {/* <link href="/static/images/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/images/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/images/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
            <link href="/static/images/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
            <link href="/static/images/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/images/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
            <link href="/static/images/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/images/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/images/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/images/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" /> */}


            {/* <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
            <link rel="mask-icon" href="/static/images/safari-pinned-tab.svg" color="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#000000" /> */}

            <meta property="og:title" content="Lunarworks | Consultancy"/>
            <meta property="og:site_name" content="Lunarworks | Consultancy"/>
            <meta property="og:url" content="https://www.crossfitdeathorglory.co.uk"/>
            <meta property="og:description" content=""/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content=""/>


            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Lunarworks | Consultancy" />
            <meta name="twitter:description" content="" />
            <meta name="twitter:image" content="" />
            <meta name="twitter:image:alt" content="" />


            <meta name="theme-color" content="#000"/>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="manifest" href="/static/manifest.json" />
            {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{__html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js');
            }
          `}} />
        </body>
      </html>
    )
  }
}