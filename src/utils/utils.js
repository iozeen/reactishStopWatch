import React from 'react';

export default function renderTime(time, bool) {
  console.log('RENDERTIME:', time);
  let minutes = Math.floor(time / 6000) > 0 ? Math.floor(time / 6000) : 0;
  time -= minutes * 6000;
  let seconds = Math.floor(time / 100) > 0 ? Math.floor(time / 100) : 0;
  time -= seconds * 100;
  let milli = time; //100ms = 1 milli
  let obj = {
    minutes: (minutes < 10 ? '0' + minutes : minutes),
    seconds: (seconds < 10 ? '0' + seconds : seconds),
    milli: (milli < 10 ? '0' + milli : milli)
  }
  return (<div className={"time" + (bool ? ' blue' : '')}>
    <div className="time-normal">{obj.minutes}:{obj.seconds}.</div>
    <div className="time-small">{obj.milli}</div>
  </div>);
}