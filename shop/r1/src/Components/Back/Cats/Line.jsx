import { useContext } from 'react';
import BackContext from '../BackContext';

function Line({ line }) { //line yra id ir title

  const { setDeleteCat } = useContext(BackContext);

  const handleDelete = () => {
    setDeleteCat(line); //tas kuris turi mygtuka delete
  }

  const handleEdit = () => {
    // setModalData(tree);
  }

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <b>{line.title}</b>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
          <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default Line;