import { useState } from 'react';

import './App.css';

const Count = ()=> {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button className='minus' onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1 className='counter' style={{color : counter===0?'grey': counter > 0?'green':'red'}}>{counter}</h1>
      <button className='plus' onClick={() => setCounter((nextCount) => nextCount +1)}>+</button>
    </div>
  );
};  

export default Count;
