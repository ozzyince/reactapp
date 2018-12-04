import React, { Component} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
import config from './config';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './style.css';

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
      <Container>
        <div className="row h-75 justify-content-center align-items-center">
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="username">
              <Form.Control type="email" placeholder="Enter email" value={this.state.username} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </Form.Group>
            <Button className="btn btn-primary block full-width m-b" type="submit" >
              Login
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}
