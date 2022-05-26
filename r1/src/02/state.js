import './App.scss';
import React, { useState } from 'react';



function apskaiciuotiPradiniSkaitikli() {
  console.log('Apskaiciavimai');
  return Math.trunc(Math.random() * 20)
}


function App() {
  // const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(apskaiciuotiPradiniSkaitikli)
  const [counter, setCounter] = useState(() => {
    return apskaiciuotiPradiniSkaitikli()
  })

  const [state, setState] = useState({ //objektas
    title: 'Skaitiklis',
    date: Date.now()
  })


  function increment() {
    //   setCounter(counter + 1) //prisideda 1
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
    // setCounter(prev => prev + 1) //prisideda 2 prie paskutinio
  }
  function decrement() {
    setCounter(counter - 1)
  }
  function updateTitle() {
    // setState({ title: 'New title' }) //neteisingas uzrasymas
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
  }


  return (
    <div>
      <h1>Skaitliukas: {counter}</h1>
      <button onClick={increment}>Plius</button>
      <button onClick={decrement}>Minus</button>

      {/* objektui */}
      <button onClick={updateTitle}>Change title</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}
export default App;


