import React from "react";
import axios from "axios";
import "../../styles/ListUser.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(">>>check res: ", res);
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      ListUser: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log(">>>Check res data: ", res.data.data);
  }
  handleViewUserDetail = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { ListUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewUserDetail(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name} -{" "}
                  {item.email}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
