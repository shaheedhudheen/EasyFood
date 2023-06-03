import React from "react";

class MemberOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("child CDM");
  }

  render() {
    const { name, avatar_url, bio, location } = this.props.data;
    console.log("child Render");
    return (
      <div className="member">
        <img src={avatar_url} alt="" className="member-img" />
        <h3> {name}</h3>
        <h4> {bio}</h4>
        <p> {location}</p>

        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          {this.state.count} {this.state.count2}
        </button> */}
      </div>
    );
  }
}

export default MemberOne;
