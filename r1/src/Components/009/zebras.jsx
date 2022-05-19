// function Zebras({ props }) {
//   console.log(props)
//   if (props === 1) {
//     return (
//       <h1 style={
//         {
//           color: 'blue'
//         }
//       }>Zebrai ir Bebrai</h1>
//     )
//   }
//   if (props === 2) {
//     return <h1 style={
//       {
//         color: 'red'
//       }
//     }>Zebrai ir Bebrai</h1>
//   }
// }
function Zebras({ checkIfTwo }) {
  console.log(checkIfTwo)
  let spalva;
  if (checkIfTwo === 1) {
    spalva = 'blue'
  } else if (checkIfTwo === 2) {
    spalva = 'red'
  } else {
    spalva = 'black'
  }

  return (
    <h1 style={
      {
        color: spalva
      }
    }>Zebrai ir Bebrai</h1>
  )


}
export default Zebras
