import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [count ,setCount]=useState(0);
    const department="computer";
    const countfunction =()=>{
        setCount(ans=>ans+1);
    }

  return (
    <div>
      Parent Components
      <ChildComponent dep={department} case="134" />
      <br />
      <button onClick={countfunction}>button</button>
      count{count }
    </div>
  )
}

export default ParentComponent
