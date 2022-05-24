import { useRef, useState } from 'react';
import './App.scss';

function App() {

  const [count, setCount] = useState(0);
  const mano = useRef(0);

  const add = () => {
    setCount(c => c + 1)
    mano.current = mano.current + 3;
    console.log(mano.current);
    const p = document.querySelector('#panda');
    console.log(p.dataset.panda);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>useRef LocalStorage - {count}</h1>
        <button onClick={add}>+1</button>
        <div id='panda' data-panda="miega"></div>
      </header >
    </div >
  );
}
export default App;


//useRef - norint apikacijoje tureti kintamaji, kad jis nebutu state

// dataset - <p data -super-duper=22>, js pasieks si elementa per p.dataset.superDuper gausim 22