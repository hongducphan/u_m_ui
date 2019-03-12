import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.location.state.username,
    };
  }
  render() {
    return <h1>{this.state.username}</h1>;
  }
}

export default Home;
