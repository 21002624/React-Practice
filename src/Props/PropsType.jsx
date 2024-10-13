import React from 'react'
import PropTypes from 'prop-types'; 

const Data=()=>{
    const User={
        name:"akash",
        age:20,
        isActive: true,
    }
    return <PropsType name={User.name} age={User.age} isActive={User.isActive} />
}

const PropsType = ({name,age,isActive}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isActive}</p>
    </div>
  )
}

PropsType.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isActive: PropTypes.bool,
};
export {Data}

export default PropsType
