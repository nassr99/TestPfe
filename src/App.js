import { React, useState } from 'react'
import "./App.css"

export default function App() {
  const [counter, setCounter] = useState(0);
 
  
  const increase = () => {
    setCounter(count => count + 1);
    if (counter >= 0 ) {
      document.getElementById('count').style.color='blue';
    }
  };
 
  
  const decrease = () => {
    
    if (counter <= 0) {
      document.getElementById('count').style.color='red';
    }
    setCounter(count => count - 1);
  };
 

  return (
    <div className="counter" id='count'>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
      <button className='id-' onClick={decrease}>-</button>
        <button className='idplus' onClick={increase}>+</button>
      </div>
    </div>
  );
}