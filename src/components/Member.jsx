import React from "react";

class Member extends React.Component {
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
      <div className="flex flex-col items-center gap-2">
        <img src={avatar_url} alt="" className="w-40 rounded-full" />
        <h3 className="text-2xl font-bold"> {name}</h3>
        <h4 className="font-semibold"> {bio}</h4>
        <p className="font-normal"> {location}</p>

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

export default Member;
