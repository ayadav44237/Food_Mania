import React from "react";
import UseContextMbd from "./Utils/UseContextMbd";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child componentDidMount");
  }
  render() {
    console.log("child render");
    return (
      <>
   

       {/* //Bellow is  how we use usecontext in Class based Component */}
        <UseContextMbd.Consumer>
            {({user})=><h1>{user.place}</h1>}
        </UseContextMbd.Consumer>
        
      </>
    );
  }
}
export default Profile;
