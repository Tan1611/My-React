import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    event.preventDefault();
    console.log(">>>check data: ", this.state);

    this.props.addNewJob({
      id: Math.floor(Math.random() * 10),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="title">title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitle(event)}
          />
          <br />
          <label htmlFor="salary">salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}
export default AddComponent;
