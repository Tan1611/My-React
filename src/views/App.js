import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./todo/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./nav/Nav";
import Home from "./example/Home";
import MyComponent from "./example/MyComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListUser from "./user/ListUser";
import UserDetails from "./user/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo" component={ListTodo} />
            <Route path="/about" component={MyComponent} />
            <Route path="/user" exact component={ListUser} />
            <Route path="/user/:id" component={UserDetails} />
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
