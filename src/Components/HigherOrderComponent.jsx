import React from 'react'

function SimpleComponent(props){
    return <p>{props.message}</p>;
}

const HigherOrderComponent = (WrappedComponent ) =>(props)=> {
 console.log(`current props: ${props}`);
 return <WrappedComponent{...props}/>;
};

export {SimpleComponent};

export default HigherOrderComponent; 