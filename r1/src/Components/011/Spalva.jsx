function Spalva({ seaPlaners }) {
  seaPlaners.sort((a, b) => {

    if (a.color < b.color) {
      return -1;
    }
    if (a.color > b.color) {
      return 1;
    }
    return 0;
  });

  return seaPlaners.map((b, i) => <div style={{ color: b.color }} key={i}>{b.name} {b.type}</div>)
}
export default Spalva;