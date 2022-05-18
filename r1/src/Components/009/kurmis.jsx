function Kurmis({ skaicius }) {
  const xzz = 33;
  return (
    <>
      <h3>Kurmis</h3>
      <span>Urvinis padaras Nr. {xzz > 20 ? 'Daug' : 'Nedaug'} </span>
      <span>Urvinis padaras {skaicius + 11}</span>
    </>
  )
}
export default Kurmis

 //<> </> tuscias tagas, kad grazintu du ar daugiau tagus, svarbu, kad tevas butu vienas
// {} rasomas tik vienos eilutes JS kodas, galima naudoti ternary