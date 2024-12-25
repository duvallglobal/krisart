import Head from 'next/head'

interface CustomHeadProps {
  title: string
  description: string
  keywords: string
}

export default function CustomHead({ title, description, keywords }: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

