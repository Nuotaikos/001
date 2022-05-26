function Garazas({ seaPlaner }) {

  return (
    <>

      <div style={{ color: seaPlaner.color }}>{seaPlaner.id} {seaPlaner.type} {seaPlaner.name} </div> )

    </>
  )
}
//   return (
//     <>
//       {
//         seaPlaners.map((b, i) => b.type === 'car' ? <div style={{ color: b.color }} key={i}>{b.id} {b.type} {b.name} </div> : null)
//       }
//     </>
//   )
// }

export default Garazas;