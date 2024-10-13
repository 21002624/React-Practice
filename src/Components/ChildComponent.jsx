import React from 'react'

// getting values from parent componets and acessing using props
const ChildComponent = (props) => {
  return (
    <div>
      Name : {props.name};<br/>
    </div>
  )
}

const ChildComponent2=({FunctionProps})=>{
    return(
        <>
          <button onClick={FunctionProps}>Click</button>
        </>
    )
}

export {ChildComponent2};

export default ChildComponent
