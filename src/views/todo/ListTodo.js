import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../color/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "s1", title: "Doing Homework" },
      { id: "s2", title: "Making Videos" },
      { id: "s3", title: "Fixing Bugs" },
    ],
    editTodo: {},
  };

  handleAddNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add succed!");
  };

  deleteTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete succed!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let ObjIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[ObjIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Edit succed!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEdit = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>check empty object: ", isEmptyObj);
    return (
      <>
        <div className="list-todo-container">
          <AddTodo handleAddNewTodo={this.handleAddNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEdit(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.deleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
          {/* <div className="delete-todo">
          <input type="text" />
          <button type="button">Delete</button>
        </div> */}
        </div>
      </>
    );
  }
}
export default Color(ListTodo);
