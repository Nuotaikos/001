import { useReducer, useState } from 'react';
import './App.scss';
import allReducer from './Reducers/allReducer';
import skaiciaiReducer from './Reducers/skaiciaiReducer';
// import colorReducer from './Reducers / colorReducer';
// import numberReducer from './Reducers/numberReducer';
// import textReducer from './Reducers/textReducer';
// import kvReducer from './Reducers/kvReducer';
import rand from './Functions/rand';


function App() {

  // const [color, setColor] = useState('yellow');
  const [color, dispachColor] = useReducer(allReducer, 'green');
  const [color1, dispachColor1] = useReducer(allReducer, 'blue')
  const [skaiciai, dispachSkaiciai] = useReducer(skaiciaiReducer, '0000')


  const goPink = () => {
    const action = {
      type: 'go_pink'
    }
    dispachColor1(action);
  }

  const goBlue = () => {
    const action = {
      type: 'go_bl'
    }
    dispachColor(action);
  }

  const goWhite = () => {
    const action = {
      type: 'go_w'
    }
    dispachColor(action);
  }
  const goKeisk = () => {
    const action = {
      type: 'go_keisk'
    }
    dispachColor1(action);
  }
  const goSkaiciai1 = () => {
    const action = {
      type: 'go_sk1'
    }
    dispachSkaiciai(action);
  }
  const goSkaiciai2 = () => {
    const action = {
      type: 'go_sk2',
      payload: rand(0, 10)
    }
    dispachSkaiciai(action);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ background: color1 }}>Labas</h1>
        <h2 style={{ color: color }}>hello <span> {skaiciai} </span></h2>

        <div className='kvc'>
          <button onClick={goBlue}>Melyna</button>
          <button onClick={goWhite}>Blata</button>
          <button onClick={goKeisk}>Keisk spalva</button>
          <button onClick={goPink}>Nuspalvink fona</button>
        </div>
        <div className='kvc'>
          <button onClick={goSkaiciai1}>Skaiciai 1</button>
          <button onClick={goSkaiciai2}>Skaiciai 2</button>
        </div>
      </header>
    </div>
  );

}

export default App;