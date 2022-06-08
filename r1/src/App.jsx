import { useReducer, useState } from 'react';
import './App.scss';
import listReducer from './Reducers/listReducer';

function App() {

  const [list, listDispach] = useReducer(listReducer, []);
  const [numInput, setNumInput] = useState();

  const newList = () => {
    const action = {
      type: 'new'
    }
    listDispach(action);
  }

  const sortList = () => {
    const action = {
      type: 'sort'
    }
    listDispach(action);
  }

  const f5000 = () => {
    const action = {
      type: 'f5000'
    }
    listDispach(action);
  }

  const f4000 = () => {
    const action = {
      type: 'f4000'
    }
    listDispach(action);
  }

  const freset = () => {
    const action = {
      type: 'freset'
    }
    listDispach(action);
  }

  const DefSortList = () => {
    const action = {
      type: 'DefSortList'
    }
    listDispach(action);
  }

  const add = () => {
    const action = {
      type: 'add'
    }
    listDispach(action);
  }
  const bla = n => {
    const action = {
      type: 'bla',
      payload: n
    }
    listDispach(action);
  }
  const goNum = () => {
    setNumInput(numInput);
    const action = {
      type: 'go_num',
      payload: numInput
    }
    listDispach(action);

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>REDUCER</h1>
        <div className="kvc">
          <button onClick={newList}>New List</button>
          <button onClick={sortList}>Sort List</button>
          <button onClick={DefSortList}>Default Sort List</button>
          <button onClick={f5000}>Filter more 5000</button>
          <button onClick={f4000}>Filter less 4000</button>
          <button onClick={freset}>Filter Reset</button>
          <button onClick={add}>Add to List</button>
          <input type="text" value={numInput} onChange={e => setNumInput(e.target.value)}></input>
          <button onClick={goNum}>Input</button>
        </div>
        <div className="kvc">
          {
            list.map((o, i) => o.show ? <div key={i} className="kv" onClick={() => bla(o.number)} style={{ backgroundColor: o.color }}><i>{o.number}</i></div> : null)
          }
        </div>

      </header>
    </div>
  );



}

export default App;