function Namas({ seaPlaner }) {
  console.log(seaPlaner)

  return (
    <>

      <div style={{ color: seaPlaner.color }}>{seaPlaner.id} {seaPlaner.type} {seaPlaner.name} </div> )

    </>
  )
}
export default Namas;

// 5 Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.