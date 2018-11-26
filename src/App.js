import React, { Component} from 'react';

export default class App extends Component{
  render() {
    return(
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}
