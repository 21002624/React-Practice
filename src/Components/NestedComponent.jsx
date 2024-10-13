import React from 'react'
import ChildComponent, { ChildComponent2 } from './ChildComponent'
import HigherOrderComponent from './HigherOrderComponent'
import { SimpleComponent } from './HigherOrderComponent';

const PassComponent=HigherOrderComponent(SimpleComponent);
const NestedComponent = () => {
    const PropsFunction=()=>{
        alert("passed function to child component");
    }

  return (
    <div>
        {/* passing a value using props */}
      <ChildComponent name="akash"/>
      <ChildComponent2 FunctionProps={PropsFunction}/>
      <PassComponent message="this is higher order function" />
    </div>
  )
}

export default NestedComponent
