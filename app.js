import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Welcome} from './kk'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'AOO'
    };
  }

  componentDidMount(){
    alert('mounted');
  }

  render() {
    return (
      <div id="main">
        <h3>Hello, {this.state.name}</h3>
        <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
  </div>
      </div>
    );
  }
}

