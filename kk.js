import React, { Component } from 'react';
import { render } from 'react-dom';
export class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return <h3>{this.props.name}</h3>;
  }
}
