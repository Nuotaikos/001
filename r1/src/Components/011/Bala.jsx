function Bala({ seaPlaners }) {

  return (

    seaPlaners.map((b, i) => <div style={{ color: b.color }} key={i}>{b.id} {b.type} {b.name}</div>)

  )

}
export default Bala;

// 1 Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.
// 7 Visuose uždaviniuose name savybę reikia nudažyti spalva, kuri yra color savybėje.