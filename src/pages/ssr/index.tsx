import Link from 'next/link';
import React, { Fragment,useEffect, useState } from 'react';
import { helpers } from "../../utils";

function SSR(props: any) {
    // console.log("4", props);
    const { data } = props;
    const [dataLocal, setData] = useState(data);

    console.log("OUT",helpers.checkServer());
    
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
console.log(helpers.checkServer());

        setData([])
    }, [])

    return (

        <Fragment>
            <Link

                href={{
                    pathname: '/ssr-link',
                    query: { name: 'test' },
                }}
            >
                <a>Go to ssr link </a>


            </Link>

            <div>SSR</div>

            {dataLocal?.map((el: any) => {
                return <li key={el.id}>{el.name}</li>
            })}
        </Fragment>
    )
}
// This gets called on every request
export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await fetch(`https://6232b72e8364d63035c2419c.mockapi.io/api/users`)
    const data = await res.json();

    // Pass data to the page via props    
    return { props: { data } }
}
export default SSR;