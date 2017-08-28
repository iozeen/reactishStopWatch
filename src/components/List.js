import React, { Component } from 'react';
import renderTime from '../utils/utils';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: this.props.interval
    }

    this.renderList = this.renderList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ interval: nextProps.interval });
  }

  renderList() {
    return this.state.interval.map((item, i) => {
      let index = this.state.interval.length - i - 1;
      return <li key={i}>
        <div className="time-container">
          <div className="time-index">{(index + 1 ) < 10 ? '0' + (index + 1) : (index + 1)}</div>
          {renderTime(item.time)}
          {renderTime(item.diff, true)}
        </div>
      </li>
    });
  }

  render() {
    return (
      <content className="content">
        {this.props.interval.length > 0 ?
          <ul className="time-list">
            {this.renderList()}
          </ul>
          :
          null}
      </content>
    );
  }
}