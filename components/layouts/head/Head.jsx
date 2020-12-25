import React from 'react'
import Head from 'next/head'

const HeadSection = () => (
  <Head>
    <title>Fitigaï — Fit your inner soul</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />

    {/* <Global site tag (gtag.js) - Google Analytics */}
    <script
      async
      src='https://www.googletagmanager.com/gtag/js?id=G-14K3ZLC8BK'
    />
    <script>
      {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-14K3ZLC8BK');`}
    </script>

    {/* Gooogle Tag Manager */}
    <script>
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T5HPQ54');`}
    </script>
  </Head>
)

export default HeadSection
