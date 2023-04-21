/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* 여기에 페이지의 메타 데이터를 정의할 수 있습니다. */}
          <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
          <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css" />
          {/* <!-- Import the custom Bootstrap 4 theme from our hosted CDN --> */}
          <link rel="stylesheet" href="//demo.productionready.io/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
