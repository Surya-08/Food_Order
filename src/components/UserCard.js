import React from "react";
import { Link } from "react-router-dom";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "test",
        location: "test",
      },
    };
  }
  async componentDidMount() {
    // console.log("child didmount");
    const data = await fetch("https://api.github.com/users/Surya-08");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { login, url, avatar_url } = this.state.userInfo;
    // const handleClassCount = () => {
    //   this.setState({});
    // };
    return (
      <div>
        <img src={avatar_url} alt="" width={50} height={50} />
        <h3>{login}</h3>
        <Link to={url}>{url}</Link>
      </div>
    );
  }
}
export default UserCard;
