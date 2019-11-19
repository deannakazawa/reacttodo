import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import {
  Button,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Progress
} from "reactstrap";

import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import LoginPage from "./Components/login"

const heading = {
  color: "red",
  background: "black"
};

class App extends React.Component {
  constructor(props) {
    //1
    super(props);
    this.state = {
      //2
      todos: [], //2
      inputValue: "" //2.3
    };
  }

  handleChange = event => {
    //4buatin fuction
    this.setState({
      [event.target.name]: event.target.value //5untuk mengambil inputValue
    });
    console.log(this.state.inputValue);
  };

  // addTodo = () => {
  //   return
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/"> home</Link>
            </li>
            <li>
              <Link to="/todo">todo</Link>
            </li>
            <li>
              <Link to="/tic-tac-toe">tic tac toe</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>

          <PrivateRoute path="/todo">
            <div className="App">
              <div>
                <Navbar color="faded" light>
                  <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                  <NavbarToggler className="mr-2" />
                  <Collapse navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                          GitHub
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
              <h1 style={heading}>Todo list React</h1>
              <p className="tanggal">hari senin tanggal 17 november 2019</p>
              <Input
                type="text"
                name="inputValue" //3
                onChange={this.handleChange} //3
                id=""
                placeholder="input"
                style={{ width: "50%", display: "inline" }}
              />
              <Button onClick={this.addTodo} color="primary">
                Add Todo
              </Button>{" "}
              <div className="text-center">25%</div>
              <Progress value="25" width="50px" />
            </div>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
