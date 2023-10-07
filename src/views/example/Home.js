import React from "react";
import Color from "../color/Color";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }

  render() {
    console.log(">>>check props: ", this.props);
    return (
      <>
        <div>Hello From Home</div>
      </>
    );
  }
}
export default Color(Home);
