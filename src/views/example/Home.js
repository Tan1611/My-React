import React from "react";
import Color from "../color/Color";
// import logo from "../../assets/images/hinh.png";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDelete = (user) => {
    console.log("check data user: ", user);
    this.props.deleteUserRedux(user);
    alert("Click me");
  };

  handleCreatUser = () => {
    this.props.addUserRedux();
  };

  render() {
    console.log(">>>check props: ", this.props);
    let listUser = this.props.dataRedux;
    return (
      <>
        <div>Hello From Home</div>
        {/* <div>
          <img
            src={logo}
            alt=""
            style={{ height: "200px", width: "200px", margin: "10px auto" }}
          />
        </div> */}
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.handleDelete(item)}>x</span>
                </div>
              );
            })}
        </div>
        <div>
          <button type="button" onClick={() => this.handleCreatUser()}>
            Add new
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "Delete_User", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "Creat_User" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
