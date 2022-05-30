
import { useEffect, useState } from 'react';
import './App.scss';
// import randColor from './Functions/randColor';
import rand from './Functions/rand';
// import { v4 as uuidv4 } from 'uuid';



function App() {
  // 1. Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.
  const [kv, setKv] = useState([]);
  const [skaiciu, setSkaiciu] = useState('');

  const inputSkaiciu = e => {
    setSkaiciu(e.target.value);
  }
  const addKv = () => {
    for (let i = 0; i < skaiciu; i++) {

      setKv(kv => [...kv, rand(100, 200)]);
    }
  }

  // 2. Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.
  const [katinai, setKatinai] = useState([]);
  const [vardas, setVardas] = useState('');
  const [svoris, setSvoris] = useState('');

  const inputVarda = e => {
    setVardas(e.target.value);
  }
  const inputSvori = e => {
    setSvoris(e.target.value);
  }
  const addKatinai = () => {
    const copyKatinai = [...katinai]
    copyKatinai.push([vardas, svoris])
    copyKatinai.sort((a, b) => b[1] - a[1])
    console.log(copyKatinai)
    setKatinai(copyKatinai)
    localStorage.setItem('katinai', JSON.stringify(copyKatinai));
  }
  //Puslapiui persikrovus, katinukų ssąrašas turi išlikti nepakitęs.
  // useEffect(() => {
  //   if (null === katinai) {
  //     return;
  //   }
  //   katinai.length > 0 && localStorage.setItem('katinai', JSON.stringify(katinai));
  // }, [katinai]);

  useEffect(() => {
    if (null === katinai) {
      return;
    }
    const kaciukai = JSON.parse(localStorage.getItem('katinai'));


    // console.log(JSON.parse(kaciukai).map(el => el.vardas))
    if (kaciukai) { setKatinai(kaciukai) }
    // setKatinai(kaciukai)
  }, []);
  //Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio.

  //Skaičiuoti ir atvaizduoti bendrą katinukų svorį.


  // 3.Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs
  const [pirmas, setPirmas] = useState(0);
  const [antras, setAntras] = useState(0);

  const inputPirmas = e => {
    const skaicius = e.target.value;
    setPirmas(skaicius);
    setAntras(skaicius * 2)
  }
  const inputAntras = e => {
    const skaicius = e.target.value;
    setAntras(skaicius);
    setPirmas(skaicius * 2)
  }


  // 4.Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą.

  return (
    <div className="App">
      <header className="App-header" >
        <fieldset>
          <legend>1 uždavinys</legend>
          <div className='kvc'>
            {
              kv.map((k, i) => (<div className='kv' key={i}>{k}</div>))
            }
          </div>
          <input type="text" onChange={inputSkaiciu} value={skaiciu} />
          <button onClick={addKv}>Click</button>
        </fieldset>

        <fieldset>
          <legend>2 uždavinys</legend>
          <legend>Katinų sąrašas</legend>
          <input type="text" placeholder="Vardas" onChange={inputVarda} value={vardas} />
          <input type="text" placeholder="Svoris" onChange={inputSvori} value={svoris} />
          <button onClick={addKatinai}>Click</button>
          <div>
            <legend>Katinai</legend>
            {
              katinai.length > 0 && katinai.map((k, i) => (<div key={i}>{k} </div>))
            }
          </div>
        </fieldset>

        <fieldset>
          <legend>3 uždavinys</legend>
          <input type="text" onChange={inputPirmas} value={pirmas} />
          <input type="text" onChange={inputAntras} value={antras} />
        </fieldset>
      </header>
    </div>
  );
}

export default App;
