import React from "react";
import Profile from "./Profile";
class Profile2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Parent  Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Profile/>
        <Profile/>

        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState((prev) => ({ count: prev.count + 1 }));
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState((prev) => ({ count: prev.count - 1 }));
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
export default Profile2;
