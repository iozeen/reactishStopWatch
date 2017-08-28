import React, { Component } from 'react';
import renderTime from '../utils/utils';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      milliSeconds: this.props.time
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ milliSeconds: nextProps.time });
  }

  render() {
    return (
      <header className="header">
        {renderTime(this.state.milliSeconds)}
      </header>
    );
  }
}