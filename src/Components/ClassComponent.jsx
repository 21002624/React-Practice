import React,{Component} from "react";
import MyPureComponent from "./MyPureComponent";


class ClassComponent extends Component{
    state={
        message:"hello hello",
    };

    updateMessage=()=>{
        this.setState({message:"hello world"});
    }
    render(){
        return(
            <>
                <h1>this is Class Component</h1>
                <button onClick={this.updateMessage}>MSG</button>
                <MyPureComponent message={this.state.message}/>
            </>
        )
    }
}

export default ClassComponent;