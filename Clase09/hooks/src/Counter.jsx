import { useState , useEffect } from "react"
import './index.css'

const Counter = () => {
    const [ count , setCount ] = useState(0)
    useEffect( () =>{
        alert(`Cambio el Contador ${count}`)
    },[count])
    return (
        <>
        <button onClick={()=> setCount(count+1)}>  + </button>
        <p>Numero: {count}</p>
        <button onClick={()=> setCount (count -1)}> - </button>
        </>
    )
}

export {
    Counter
}

