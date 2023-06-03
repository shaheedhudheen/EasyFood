import React from "react";

class MemberTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, avatar_url, bio, location } = this.props.data;

    return (
      <div className="member">
        <img src={avatar_url} alt="" className="member-img"/>
        <h3> {name}</h3>
        <h4> {bio}</h4>
        <p> {location}</p>
      </div>
    );
  }
}

export default MemberTwo;
