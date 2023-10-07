import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleAddTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.warning("Missing title!!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10),
      title: this.state.title,
    };

    this.props.handleAddNewTodo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(event) => this.handleAddTitle(event)}
          />
          <button
            type="button"
            className="add"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;
