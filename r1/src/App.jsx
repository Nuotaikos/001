import { useReducer, useState } from 'react';
import './App.scss';
import allReducer from './Reducers/allReducer';
// import colorReducer from './Reducers / colorReducer';
// import numberReducer from './Reducers/numberReducer';
// import textReducer from './Reducers/textReducer';
// import kvReducer from './Reducers/kvReducer';
// import rand from './Functions/rand';


function App() {

  // const [color, setColor] = useState('yellow');
  const [color, dispachColor] = useReducer(allReducer, 'green');
  const [color1, dispachColor1] = useReducer(allReducer, 'blue')


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

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ background: color1 }}>Labas</h1>
        <h2 style={{ color: color }}>hello</h2>
        <button onClick={goBlue}>Nuspalvink</button>
        <button onClick={goPink}>Nuspalvink teksta</button>
      </header>
    </div>
  );

}

export default App;