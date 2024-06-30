import React, { Component } from "react";
import UserCard from "./UserCard";

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
        This is tastyFood
        <div className="user-card">
          <UserCard name={"Food Ordering App"} location={"Home"} />
        </div>
      </div>
    );
  }
}

export default About;
