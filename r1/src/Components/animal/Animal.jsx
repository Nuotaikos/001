import randColor from "../../Functions/randColor"

function Animal({ name, photo }) {
  return (
    <>
      <div style={{ background: randColor(), width: '50%' }} >{name}</div>
      <img style={{ width: '50%' }} src={photo} alt={name + '-animal'} />
    </>


  )
}
export default Animal