import React, { useState } from 'react'
import clock from '../src/clock.jpg';
import './App.css';
function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, utime] = useState(time)
  function updateTime() {
    let time = new Date().toLocaleTimeString();
    utime(time);
  }
  setInterval(updateTime, 1000)
  return (
    <>
    
      <h1 className='time'><img className="clock"src={clock} alt="clockImage" />{ctime} 
      <p className='text'>Time </p>
      </h1>
    </>
  );
}

export default App;
