import Tipas from "./Tipas";
import Vardas from "./Vardas";
import Spalva from "./Spalva";


function Vandenynas({ seaPlaners }) {

  return <>
    <Tipas seaPlaners={seaPlaners}></Tipas>
    <Vardas seaPlaners={seaPlaners}></Vardas>
    <Spalva seaPlaners={seaPlaners}></Spalva>
  </>
}
export default Vandenynas;
// 4 Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. Vandenynas tėvinis komponentas kiti trys vaikiniai. Vaikiniuose komponentuose atvaizduoti tą patį masyvą, tik išrūšiuotą pagal komponento vardą (pvz Tipas išrūšiuota pagal tipą ir t.t.).