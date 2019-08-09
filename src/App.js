import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./modules/auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: "",
      gender: "female",
      age: "",
      renderLoginForm: false,
      authenticated: false,
      email: "",
      password: "",
      message: ""
    };
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password);
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false });
    }
  }

  render() {
    let renderLogin;

    if (this.state.renderLoginForm === true) {
      renderLogin = (
        <LoginForm
          loginHandler={this.onLogin.bind(this)}
          inputChangeHandler={this.onChange.bind(this)}
        />
      );
    } else {
      renderLogin = (
        <button
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}
        >
          Login
        </button>
      );
    }

    return (
      <div>
        <div>
          <InputFields inputChangeHandler={this.onChange.bind(this)} />
        </div>

        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />

        {renderLogin}
      </div>
    );
  }
}

export default App;
