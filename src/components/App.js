import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import List from './List';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      milliSeconds: 0,
      curr: 0,
      isStarted: false,
      interval: []
    }

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
    this.timer = null;
  }

  handleStart() {
    this.setState({ isStarted: true });
    this.timer = setInterval(() => {
      this.setState({ milliSeconds: this.state.milliSeconds + 1 });
    }, 10);
  }

  handleStop() {
    clearInterval(this.timer);
    this.setState({ isStarted: false });
  }

  handleReset() {
    clearInterval(this.timer);
    this.setState({ milliSeconds: 0, isStarted: false, interval: [], curr: 0 });
  }

  handleInterval() {
    if (this.state.curr === 0) {
      this.setState({
        interval: [{ diff: this.state.milliSeconds, time: this.state.milliSeconds }, ...this.state.interval],
        curr: this.state.milliSeconds
      });
    } else {
      let time = this.state.milliSeconds;
      let diff = time - this.state.curr;
      this.setState({
        curr: time,
        interval: [{ diff, time }, ...this.state.interval]
      });
    }

  }

  render() {
    return (
      <div className="App">
        <Header time={this.state.milliSeconds} interval={this.state.interval}/>
        <List interval={this.state.interval}/>
        <ButtonPanel
          onHandleStart={this.handleStart}
          onHandleStop={this.handleStop}
          onHandleReset={this.handleReset}
          onHandleInterval={this.handleInterval}
          isStarted={this.state.isStarted}
          time={this.state.milliSeconds}
        />
      </div>
    );
  }
}

export default App;
