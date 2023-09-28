import { useState } from "react"

export default function APITest(){
    const [responseData,setResponseData] = useState();
    fetch("https://swapi.dev/api/people/1")
    .then(response=>response.json())
    .then(data => console.log(data))
    console.log("component rendered");
    return(
        <>
            <pre>{JSON.stringify(data)}</pre>
        </>
    )
}