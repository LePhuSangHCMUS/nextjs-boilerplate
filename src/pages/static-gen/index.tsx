import React, { Fragment, useEffect, useState } from 'react'
import {Button,notification} from "antd"
import useSWR from 'swr'
import baseApi from 'services/revalidate.api';
function Static(props: any) {
    // console.log("4", props);
    const { data } = props;
    // const [data, setData] = useState([]);
    // useEffect(() => {

    //     const fetchData = async () => {
    //         // Fetch data from external API
    //         const res = await fetch(`https://6232b72e8364d63035c2419c.mockapi.io/api/users`)
    //         const data = await res.json();
    //         setData(data)
    //         return data;
    //     }
    //     fetchData()
    // }, [])

    const handleRefresh=()=>{
        baseApi.revalidate().then(data=>{
            window.location.reload();
        }).catch(err=>{
            notification.error(err.message||"errr")
        
        
        })
    }
    return (


        <Fragment>
            <div>Static </div>
            <Button onClick={()=>{
                handleRefresh()
            }}>Refresh</Button>
            {data?.map((el: any) => {
                return <li key={el.id}>{el.name}</li>
            })}
        </Fragment>
    )
}
// This gets called on every request
export async function getStaticProps(context: any) {
    // Fetch data from external API
    const res = await fetch(`https://6232b72e8364d63035c2419c.mockapi.io/api/users`)
    const data = await res.json()

    // Pass data to the page via props
    return { 
        
    props: { data },
 // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 120, // In seconds ,

}
}
export default Static;