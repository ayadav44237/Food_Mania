import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
                count:1
            }
        console.log("Child Constructor")
    }
    componentDidMount(){
        console.log("Child componentDidMount");
    }
    render(){
        console.log("child render");
        return(
           
            <>
            <h1>This is child Component</h1>
            </>
        )
    }
}
export default Profile