import Valtis from "./Valtis"
import Laivas from "./Laivas"
import Sala from "./Sala"
// import seaPlaners from "./App"

function Jura({ seaPlaners }) {

  return (
    <>

      {
        seaPlaners.map((seaPlaner, i) => seaPlaner.type === 'fish' ? <div style={{ color: seaPlaner.color }} key={i}>{seaPlaner.id}. {seaPlaner.type} {seaPlaner.name}</div> : null)
      }

      <Valtis seaPlaners={seaPlaners}></Valtis>
      <Laivas seaPlaners={seaPlaners}></Laivas>
      <Sala seaPlaners={seaPlaners}></Sala>
    </>
  )

}
export default Jura

// 3 Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento).