
function Valtis({ seaPlaners }) {

  return {
    seaPlaners.map((b, i) => b.type === 'man' ? <div style={{ color: b.color }} key={i}>{b.type} {b.name}</div> : null)
  }

}
export default Valtis;