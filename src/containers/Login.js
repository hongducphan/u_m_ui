import React, { Component } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Api from '../api';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false,
      error: '',
    };
  }

  handleInput = (type, value) => {
    if (type === 'username') {
      this.setState({
        username: value,
      });
    } else {
      this.setState({
        password: value,
      });
    }
  };

  login = (username, password) => {
    Api.login(username, password).then(res => {
      if (res.data === username) {
        this.setState({
          redirect: true,
        });
      } else {
        this.setState({
          error: 'Invalid username or password!',
        });
      }
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Form>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={event => {
              this.handleInput('username', event.target.value);
            }}
          />
          <Input
            type="text"
            name="password"
            placeholder="Password"
            onChange={event => {
              this.handleInput('password', event.target.value);
            }}
          />
          <Button
            color="primary"
            onClick={() => this.login(this.state.username, this.state.password)}
          >
            Login
          </Button>
          <Label>{this.state.error}</Label>
        </Form>
      </div>
    );
  }
}

export default Login;
