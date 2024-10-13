import React, { useState } from 'react'

const Child1=({count})=>{
    return <p>Count : {count}</p>
}

const Child2=({func})=>{
    return <button onClick={func}>Increment</button>
}

const LiftingTheStateUp = () => {
    const [count ,setCount]=useState(0);
    function Increment(){
        setCount(count=>count+1);
    }

  return (
    <div>
      <Child1 count={count} />
      <Child2 func={Increment} />
    </div>
  )
}

export default LiftingTheStateUp
