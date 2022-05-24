import { useRef, useState } from 'react';
import './App.scss';

function App() {

  const [count, setCount] = useState(0);

  const mano = useRef(0);
  const panda = useRef();

  const add = () => {
    setCount(c => c + 1);
    mano.current = mano.current + 3;
    console.log(mano.current);
    // const p = document.querySelector('#panda');
    const p = panda.current;
    console.log(p.dataset.panda);
  }

  const addCat = () => {
    localStorage.setItem('katinukas', JSON.stringify(['Murka', 'Pilkis']));
  }
  const getCat = () => {
    console.log(JSON.parse(localStorage.getItem('katinukas')));
  }
  const remCat = () => {
    localStorage.removeItem('katinukas')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useRef LocalStorage {count}</h1>
        <button onClick={add}>+1</button>
        <button onClick={addCat}>Add Cat</button>
        <button onClick={getCat}>Get Cat</button>
        <button onClick={remCat}>Remove Cat</button>
        <div ref={panda} data-panda="miega"></div>
      </header>
    </div>
  );

}

export default App;


//useRef - norint apikacijoje tureti kintamaji, kad jis nebutu state

// dataset - <p data -super-duper=22>, js pasieks si elementa per p.dataset.superDuper gausim 22
//querySelector - neneudoti!!! pvz apacioje
// const add = () => {
//   setCount(c => c + 1)
//   mano.current = mano.current + 3;
//   console.log(mano.current);
//   const p = ocument.querySelector('#panda');
//   console.log(p.dataset.panda);

//localStorage - narsykles futures > aplikacijose . localStorage
{/* <button onClick={addCat}>Add Cat</button> //ikelti i localstorage
<button onClick={getCat}>Get Cat</button> //isimti is localstorage.Jei nori issiimti kas neegzistuoja, gauni null */}