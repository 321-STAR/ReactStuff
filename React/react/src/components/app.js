import React, { Component } from 'react';
import moment from "moment";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Josh has a very</h1>
        <h2>small pp</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
