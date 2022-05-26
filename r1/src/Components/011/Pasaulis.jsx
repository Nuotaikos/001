import Namas from "./Namas";
import Narvas from "./Narvas";
import Garazas from "./Garazas";
import Akvariumas from "./Akvariumas";

function Pasaulis({ seaPlaners }) {

  return (
    <>
      <div>
        <h2>Poriniai masyvo irasai</h2>
        <h3>Namas</h3>

        {
          seaPlaners.map(b => b.id % 2 === 0 && b.type === 'man' && <Namas style={{ color: b.color }} key={b.id} seaPlaner={b}></Namas>)
        }

        <h3>Narvas</h3>
        {
          seaPlaners.map(b => b.id % 2 === 0 && b.type === 'animal' && <Narvas style={{ color: b.color }} key={b.id} seaPlaner={b}></Narvas>)
        }

        <h3>Garazas</h3>
        {
          seaPlaners.map(b => b.id % 2 === 0 && b.type === 'car' && <Garazas style={{ color: b.color }} key={b.id} seaPlaner={b}></Garazas>)
        }

        <h3>Akvariumas</h3>
        {
          seaPlaners.map(b => b.id % 2 === 0 && b.type === 'fish' && <Akvariumas style={{ color: b.color }} key={b.id} seaPlaner={b}></Akvariumas>)
        }
      </div>

      <div>
        <h2>Neporiniai masyvo irasai</h2>
        <h3>Namas</h3>
        {
          seaPlaners.map(b => b.id % 2 !== 0 && b.type === 'man' && <Namas style={{ color: b.color }} key={b.id} seaPlaner={b}></Namas>)
        }

        <h3>Narvas</h3>
        {
          seaPlaners.map(b => b.id % 2 !== 0 && b.type === 'animal' && <Narvas style={{ color: b.color }} key={b.id} seaPlaner={b}></Narvas>)
        }
        <h3>Garazas</h3>
        {
          seaPlaners.map(b => b.id % 2 !== 0 && b.type === 'car' && <Garazas style={{ color: b.color }} key={b.id} seaPlaner={b}></Garazas>)
        }

        <h3>Akvariumas</h3>
        {
          seaPlaners.map(b => b.id % 2 !== 0 && b.type === 'fish' && <Akvariumas style={{ color: b.color }} key={b.id} seaPlaner={b}></Akvariumas>)
        }
      </div>
    </>
  )

}

export default Pasaulis;



// 5 Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.