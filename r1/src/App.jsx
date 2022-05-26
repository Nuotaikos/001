import { useEffect, useState } from 'react';
import './App.scss';




function App() {
  // useEffect(() => {
  //   console.log(document.querySelector('#target'));

  // })

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const flagInterval = setIntreval(() => {
      console.log('fired');
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(flagInterval); //sustabdys buvusiam renderenge
  });


  // setInterval(() => setTimer(timer + 1), 1000);




  return (
    <div>
      <h1 id='target'>Labas {timer}</h1>

    </div>
  )
}
export default App;


