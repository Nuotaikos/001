import CatsCrud from './Cats/Crud';
import ProductsCrud from './Products/Crud';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import BackContext from './BackContext';
import axios from 'axios';


function Back({ show }) {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  // const [messages, setMessages] = useState([]); //tuscias masyvas, nes nezinome kiek bus zinuciu. Jei zinotume kiek zinuciu, butu irasytas zinuciu kiekis
  const [messages, setMessages] = useState([
    { id: 4646, text: 'valio', type: 'danger' },
    { id: 466, text: 'katinai ateina', type: 'info' },
    { id: 446, text: 'rytoj bus gera diena', type: 'success' }
  ]);


  const [cats, setCats] = useState(null);
  const [createCat, setCreateCat] = useState(null);
  const [deleteCat, setDeleteCat] = useState(null);

  // Read
  useEffect(() => {
    axios.get('http://localhost:3003/admin/cats')
      .then(res => setCats(res.data));
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createCat) return;
    axios.post('http://localhost:3003/admin/cats', createCat)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
  }, [createCat]);


  // Delete
  useEffect(() => {
    if (null === deleteCat) return;
    axios.delete('http://localhost:3003/admin/cats/' + deleteCat.id)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' }); //jei ateina klaida, rodo zinute
      })
  }, [deleteCat]);

  const showMessage = () => {

  }


  return (
    <BackContext.Provider value={{
      setCreateCat,
      cats,
      setDeleteCat,
      messages
    }}>
      {
        show === 'admin' ?
          <>
            <Nav />
            <h1>BACK</h1>
          </>
          : show === 'cats' ? <CatsCrud /> :
            show === 'products' ? <ProductsCrud /> : null
      }
    </BackContext.Provider>
  )
}
export default Back;