import React,{PureComponent} from "react";
class MyPureComponent extends PureComponent{
    render(){
        console.log("Pure components is renders");
        return(
            <>
            <p>{this.props.message}</p>
            </>
        )
    }
}

export default MyPureComponent;