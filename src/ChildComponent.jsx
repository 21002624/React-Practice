import React, { Component } from 'react'

const a=5;
const name="akash";
const obj=
    {id:1,
        firstname:"vijay",
        age:25};


const ChildComponent = (props) => {
  return (
    <div>
      Child Components 1<br></br>
      {props.dep}<br/>
      {props.case}
    </div>
  )
}


const ChildComponent2=()=>{
    return (
        <>
        ChildComponent 2<br />
        {a} <br />
        {name}<br/>
        {obj.id}<br/>
        {obj.firstname}
        </>
    )
}
export {ChildComponent2}

export default ChildComponent
