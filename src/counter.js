import React, { useState } from 'react';
import './App.css'

function Counter () {

    const [ count, setCount ] = useState(0);
    
    const handleIncrement = () => setCount (count + 1 ) ;
    const handleReset = () => setCount (0) ;
    const handleDecrement = () => setCount (count - 1) ;

    const counterStyle = {
        color:count > 0 ? 'green' : count < 0 ? 'red' : 'black',
        fontSize: '5rem',
        textShadow: `
      1px 1px 1px white,
      -1px -1px 1px white,
      1px -1px 1px white,
      -1px 1px 1px white
    `,
    };

    return(
        <div className='container'>
            <h1 className='count-head' style={counterStyle}>{count}</h1>
            <button className="button button-dec" onClick={handleDecrement}>Decrement</button>
            <button className="button button-reset" onClick={handleReset}>Reset</button>
            <button className="button button-inc" onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter