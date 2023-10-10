import { useEffect, useState } from "react"
import "./style.css"

export default function APITest(){
    const [responseData,setResponseData] = useState();
    const [count,setCount] = useState(1);

    function fetchData(){
        fetch("https://swapi.dev/api/people/1")
        .then(response=>response.json())
        .then(data => {
            console.log("fetching data");
            return setResponseData(data)
        })
    }
    useEffect(fetchData,[count]);
    console.log("component rendered");

    function updateCount(){
        setCount(count => count + 1);
    }

    return(
        <>
            <pre>{JSON.stringify(responseData,null,2)}</pre>
            <button onClick={updateCount}>{count}</button>
        </>
    )
}