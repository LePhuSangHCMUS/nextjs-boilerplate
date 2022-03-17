import React, { Fragment, useEffect, useState } from 'react'

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

    return (

        <Fragment>
            <div>Static </div>
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
    return { props: { data } }
}
export default Static;