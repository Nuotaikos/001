// import { useEffect, useState } from 'react';
import './bootstrap.css';
// import Create from './Components/crud/Create';
// import './App.scss';
// import getId from './Functions/getId';
import Ndcreate from './Components/nd crudas';

function App() {



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Ndcreate></Ndcreate>

          </div>
          <div className="col-8">
            One of three columns
          </div>

        </div>
      </div>
    </>
  );


}
export default App;