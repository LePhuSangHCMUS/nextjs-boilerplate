import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { helpers } from "../../utils";
import layouts from "@Layouts/index"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router';
import Head from 'next/head'

function SSR(props: any) {
    // console.log("4", props);
    const { data } = props;
    const [dataLocal, setData] = useState(data);
    const { locale } = useRouter()
    // console.log("OUT", helpers.checkServer());
    const { t } = useTranslation(['login'])

    useEffect(() => {

        // const fetchData = async () => {
        //     // Fetch data from external API
        //     const res = await fetch(`https://6232b72e8364d63035c2419c.mockapi.io/api/users`)
        //     const data = await res.json();
        //     setData(data)
        //     return data;
        // }
        // fetchData()
        // console.log(props);
        // console.log(helpers.checkServer());

        //         setData([])
    }, [])

    return (

        <Fragment>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Link

                href={{
                    pathname: '/ssr-link',
                    query: { name: 'test' },
                }}
            >
                <a>Go to ssr link </a>


            </Link>

            <div>{t("login.title.login")}</div>
            <div>{t("common.nav.home")}</div>

            {dataLocal?.map((el: any) => {
                return <li key={el.id}>{el.name}</li>
            })}
        </Fragment>
    )
}
SSR.layout = layouts.DefaultLayout

// This gets called on every request
export async function getServerSideProps({ locale }: any) {
    // Fetch data from external API
    const res = await fetch(`https://6232b72e8364d63035c2419c.mockapi.io/api/users`)
    const data = await res.json();

    // Pass data to the page via props    
    return {
        props: {
            data,
            ...await serverSideTranslations(locale, ['common', "login"]),
        }
    }
}
export default SSR;
