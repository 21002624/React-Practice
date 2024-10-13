import React, { useState } from 'react'

const UseState = () => {
    const [count ,setCount]=useState(0);
    function Count(){
        setCount(count=>count+1);
    }

    const [fruit ,setFruit]=useState(['apple','banana','orange']);

  return (
    <div>
      <button onClick={Count}>count</button>  count : {count}
      <ul>
        {/* Render by looping using map function */}
        {fruit.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseState
