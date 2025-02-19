import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter += 1;
    setCounter(counter);
    console.log('clicked', counter);
  }
  const removeValue = () => {
    counter -= 1;
    setCounter(counter);
    console.log('clicked', counter);
  }



  return (
    <>
      <h1>Couter Application using React Hooks</h1>
      <div className='container'>
        <button onClick={addValue}>Add Value</button>
      <h2>Counter Value:{counter}</h2>
      <button onClick={removeValue}>Remove Value</button>
      </div>

    </>
  )
}

export default App
