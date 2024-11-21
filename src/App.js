import React from 'react';
import Counter from './counter';

import './App.css'

function App() {
  return (
    <div className='bg-container'>
        <div className="app-container">
          <h1>React Counter Application</h1>

            <div className='value'>
              <Counter />
            </div>
          <p className='phara'>Created By <span className='span'> MS Dileep </span> using React</p>
          </div>
    </div>

  );
}

export default App;
