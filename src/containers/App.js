import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    Axios.get('http://localhost:8080/test').then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    return (
      <h1>{this.state.data}</h1>
    );
  }
}

export default App;
