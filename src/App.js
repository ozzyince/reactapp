import React, { Component} from 'react';
import Amplify, { Auth } from 'aws-amplify';
import config from './config';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    Amplify.configure({
      Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
      }
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await Auth.signIn(this.state.username, this.state.password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
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
