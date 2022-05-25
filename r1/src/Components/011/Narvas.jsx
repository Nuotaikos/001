function Narvas({ seaPlaners }) {

  return (
    <>
      {
        seaPlaners.map((b, i) => b.type === 'animal' ? <div style={{ color: b.color }} key={i}>{b.id} {b.type} {b.name} </div> : null)
      }
    </>
  )
}

export default Narvas;