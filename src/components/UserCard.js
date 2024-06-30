import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("child didmount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    const handleClassCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <div>
        <p>{count}</p>
        <button onClick={handleClassCount}>Count</button>
        <h3>{name}</h3>
        <h3>
          {location} {count}
        </h3>
      </div>
    );
  }
}
export default UserCard;
