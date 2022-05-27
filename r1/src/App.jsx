import { useState } from 'react';
import './App.scss';
// import randColor from './Functions/randColor';
// import { v4 as uuidv4 } from 'uuid';



function App() {

  const [text, setText] = useState('');

  const inputText = e => {
    setText(e.target.value + '-');
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={inputText} value={text} />
        <h1>Formos</h1>
        <div className="kvc">

        </div>
        <button></button>
      </header>
    </div>
  );
}

export default App;

