import Head from 'next/head'

const PageHead = () => (
  <div>
    <Head>
      <title>Bruce Collie</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700|Roboto+Mono" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      body {
        color: #222;
        background-color: #FCFCFC;
      }

      a {
        color: #666;
        text-decoration: none;
      }

      a:hover {
        color: #999;
        text-decoration: underline;
      }

      @media(max-width: 600px) {
        body {
          margin: 0;
        }
      }
    `}</style>
  </div>
)

export default PageHead
