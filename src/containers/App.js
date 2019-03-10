import React, { Component } from 'react';
import Api from '../api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        email: '',
      },
      data: '',
    };
  }

  componentDidMount() {
    this.fetchData('hongducphan', '123456');
  }

  fetchData = (username, password) => {
    Api.login(username, password).then(res => {
      if (res.status === 200) {
        this.setState({
          data: res.data,
        });
      }
    });
  };

  render() {
    return <h1>{this.state.data}</h1>;
  }
}

export default App;
