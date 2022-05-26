import './App.scss';
import React, { useEffect, useState } from 'react';



function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({          //objektas
    x: 0, y: 0
  })

  // useEffect(() => {
  //   console.log('render');
  // })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // turetu buti vietoj posts -> kaip stringas ${type}
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  useEffect(() => {
    console.log('KomponentasBuvoSumontuotas')

    window.addEventListener('mousemove', event => { //judant pelytei, keiciasi skaicius
      setPos({
        x: event.clientX,
        y: event.clientY
      })
    })
  }, [])

  return (
    <div>
      <h1>Resursai: {type}</h1>


      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}
export default App;
