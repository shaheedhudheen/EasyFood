import React from "react";
import Member from "./Member";

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      member1: {},
      member2: {},
    };

    console.log("parent constructor");
  }

  async componentDidMount() {
    const data1 = await fetch("https://api.github.com/users/shaheedhudheen");
    const json1 = await data1?.json();
    const data2 = await fetch("https://api.github.com/users/mohammed-saif");
    const json2 = await data2?.json();

    this.setState({
      member1: json1,
      member2: json2,
    });

    console.log("parentCDM");
  }

  render() {
    const { member1, member2 } = this.state;
    console.log("Parent Render");
    return (
      <div className="flex justify-around py-4">
        <Member data={member1} />
        <Member data={member2} />
      </div>
    );
  }
}

export default Members;
