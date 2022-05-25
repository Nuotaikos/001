import Namas from "./Namas";
import Narvas from "./Narvas";
import Garazas from "./Garazas";
import Akvariumas from "./Akvariumas";

function Pasaulis({ seaPlaners }) {

  return (
    <>
      <div>
        <h1>Poriniai masyvo irasai</h1>
        <h3>Namas</h3>

        {
          seaPlaners.map(b => b.id % 2 === 0 && b.type === 'man' && <Namas style={{ color: b.color }} key={b.id} seaPlaner={b}></Namas>)
        }

        {/* <h3>Narvas</h3>
        {
          seaPlaners.map(b => b.id % 2 ? null : <Narvas style={{ color: b.color }} key={b.id} seaPlaner={b}></Narvas>)
        }

        <h3>Garazas</h3>
        {
          seaPlaners.map(b => b.id % 2 ? null : <Garazas style={{ color: b.color }} key={b.id} seaPlaner={b}></Garazas>)
        }
        <h3>Akvariumas</h3>
        {
          seaPlaners.map(b => b.id % 2 ? null : <Akvariumas style={{ color: b.color }} key={b.id} seaPlaner={b}></Akvariumas>)
        }
      </div>

      <div>
        <h1>Neporiniai masyvo irasai</h1>
        <h3>Namas</h3>
        {
          seaPlaners.map(b => b.id % 2 ? <Namas style={{ color: b.color }} key={b.id} seaPlaner={b}></Namas> : null)
        }

        <h3>Narvas</h3>
        {
          seaPlaners.map(b => b.id % 2 ? <Narvas style={{ color: b.color }} key={b.id} seaPlaner={b}></Narvas> : null)
        }
        <h3>Garazas</h3>
        {
          seaPlaners.map(b => b.id % 2 ? <Garazas style={{ color: b.color }} key={b.id} seaPlaner={b}></Garazas> : null)
        }
        <h3><Akvariumas></Akvariumas></h3>
        {
          seaPlaners.map(b => b.id % 2 ? <Akvariumas style={{ color: b.color }} key={b.id} seaPlaner={b}></Akvariumas> : null)
        } */}
      </div>
    </>
  )

}

export default Pasaulis;



// 5 Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.