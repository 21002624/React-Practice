import React from 'react'
import NestedComponent from './NestedComponent';
import ClassComponent from './ClassComponent';

const MultiComponent = () => {
  return (
    <div>
        {/* calling multiple components into a single component */}
      <NestedComponent />
      <ClassComponent />
    </div>
  )
}

export default MultiComponent
