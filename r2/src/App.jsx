import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
// import axios from 'axios';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [exes, setExes] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  //Read
  useEffect(() => {

  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) {
      return;
    }

    setLastUpdate(Date.now());

  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }

    setLastUpdate(Date.now());

  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }

    setLastUpdate(Date.now());

  }, [editData]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">

            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="col-8">
            <List exes={exes} setDeleteData={setDeleteData} setModalData={setModalData}></List>
          </div>
        </div>
      </div>
      <Edit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
    </>
  );


}
export default App;