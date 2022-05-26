import Bala from "./Components/011/Bala";
import './App.scss';
import Tvenkinys from "./Components/011/Tvenkinys";
import Jura from "./Components/011/Jura";
import Vandenynas from "./Components/011/Vandenynas";
import Pasaulis from "./Components/011/Pasaulis";


const seaPlaners = [
  { id: 1, type: 'man', name: 'Lina', color: 'blue' },
  { id: 2, type: 'car', name: 'Opel', color: 'red' },
  { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
  { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
  { id: 5, type: 'man', name: 'Tomas', color: 'green' },
  { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
  { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
  { id: 8, type: 'car', name: 'MB', color: 'blue' },
  { id: 9, type: 'car', name: 'ZIL', color: 'red' },
  { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>1---</h1>
        <Bala seaPlaners={seaPlaners}></Bala>
        <h1>2---</h1>
        <Tvenkinys seaPlaners={seaPlaners}></Tvenkinys>
        <h1>3---</h1>
        <Jura seaPlaners={seaPlaners}></Jura>
        <h1>4---</h1>
        <Vandenynas seaPlaners={seaPlaners}></Vandenynas>
        <h1>5---</h1>
        <Pasaulis seaPlaners={seaPlaners}></Pasaulis>
      </header >
    </div >
  );
}
export default App;

// 1 Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.

// 2 Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai. Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams (pagal id, ne masyvo indeksą).

// 3 Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento).



// 5 Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.

// 6 Kiekviename uždavinyje galima susikurti kiek reikia papildomų komponentų.
// 7 Visuose uždaviniuose name savybę reikia nudažyti spalva, kuri yra color savybėje.


