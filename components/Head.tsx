import Head from 'next/head'

type HeadProps = {
  title: string
}

export const HtmlHead = ({ title }: HeadProps) => {
  return (
    <Head>
      <title>{title ? `Aglane - ${title}` : 'Aglane Website'}</title>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="description"
        content="Building sustainable food systems and improving food security across sub-saharan Africa."
      />
      <meta
        name="keywords"
        content="Sustainable food systems, Sufficiency, Food security in Nigeria, Primary production, Aggregation, Commodity trading, Agribusiness in Nigeria, Agritech, Morden Agriculture in Africa, Agribusiness in Africa, Agribusiness in sub-sahara, Farmers, Farmers registration, Farmers validation "
      />
      <meta name="author" content="Aglane Nigeria Limited" />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
