import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "a1", title: "Fe", salary: "500" },
      { id: "a2", title: "Be", salary: "600" },
      { id: "a3", title: "Tester", salary: "700" },
    ],
  };

  addnewJob = (job) => {
    console.log(">>check data from child: ", job);
    console.log("check length: ", this.state.arrJobs.length);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
    // this.setState({
    //   arrJobs: this.state.arrJobs.push(job),
    // });
  };

  delete = (job) => {
    let current = this.state.arrJobs;
    current = current.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: current,
    });
  };

  render() {
    console.log(">>>call rerender: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addnewJob} />
        <ChildComponent jobs={this.state.arrJobs} delete={this.delete} />
      </>
    );
  }
}
export default MyComponent;
