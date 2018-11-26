import React, { Component} from 'react';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}
