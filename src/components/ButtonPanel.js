import React from 'react';

const ButtonPanel = (props) => {
  return (
    <footer className="footer">
      {!props.isStarted ?
        (props.time > 0 ? <div
            className="buttons start"
            onClick={() => {
              console.log('started', props.isStarted);
              props.onHandleStart();
            }}
          >
            Continue
          </div> :
          <div
            className="buttons start"
            onClick={() => {
              console.log('started', props.isStarted);
              props.onHandleStart();
            }}
          >
            Start
          </div>)
        : null}

      {props.isStarted ?
        <div
          className="buttons stop"
          onClick={() => {
            console.log('STOPPED', props.isStarted, props.time);
            props.onHandleStop();
          }}
        >
          Stop
        </div> : null}

      {props.isStarted ?
        <div
          className="buttons interval"
          onClick={() => {
            console.log('INTERVAL');
            props.onHandleInterval();
          }}
        >
          Interval
        </div> : null}

      {(!props.isStarted && props.time > 0) ?
        <div
          className="buttons reset"
          onClick={() => {
            console.log('RESET', props.isStarted, props.time);
            props.onHandleReset();
          }}
        >
          Reset
        </div> : null}
    </footer>
  );
}

export default ButtonPanel;