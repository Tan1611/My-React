import React from "react";
import "../../styles/Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todo
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/user" activeClassName="active">
            User
          </NavLink>
          {/* <a href="/">Home</a>
          <a href="/todo">Home</a>
          <a href="/about">Home</a> */}
          {/* <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/about">About</Link> */}
        </div>
      </>
    );
  }
}
export default Nav;
