import React, { Component } from "react";
import UserCard from "./UserCard";
// import UserContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("parent comDidMount");
  }

  render() {
    return (
      <div>
        <div>
          {/* <UserContext.Consumer>
            {(loggedInUser) => console.log(loggedInUser, "..........")}
          </UserContext.Consumer> */}
        </div>
        <div className="user-card">
          <UserCard name={"Food Ordering App"} location={"Home"} />
        </div>
      </div>
    );
  }
}

export default About;
