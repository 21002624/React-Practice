import React, {useContext, useState } from 'react'
import { createContext } from 'react';

const CountContext =createContext();

const ContextFunction=({children})=>{
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count=>count+1);
    }
    const decrement=()=>{
        setCount(count=>count-1);
    }
    return(
        <CountContext.Provider value={{count,increment,decrement}} >
            {children}
        </CountContext.Provider>
    )
}

const CountDisplay=()=>{
    const {count}=useContext(CountContext);
    return <p>Count : {count}</p>
}
const CountButton=()=>{
    const {increment,decrement}=useContext(CountContext);
    return(
        <>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </>
    )
}
const UseContext = () => {
  return (
    <ContextFunction>
        <div>
            <CountDisplay/>
            <CountButton/>
        </div>
    </ContextFunction>
  )
}

export default UseContext
