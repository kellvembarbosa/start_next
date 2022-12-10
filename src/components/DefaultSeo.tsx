import Head from 'next/head'
import { env } from 'process'
import React from 'react'

type Props = {
    title?: string,
}

const DefaultSeo = ({ title } : Props) => {
    return (
        <Head>
            <title>{!title ? process.env.NEXT_PUBLIC_TITLE : `${title} | ${process.env.NEXT_PUBLIC_TITLE}`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default DefaultSeo