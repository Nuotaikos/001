function Vardas({ seaPlaners }) {
  seaPlaners.sort((a, b) => {

    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return seaPlaners.map((b, i) => <div style={{ color: b.color }} key={i}>{b.name} {b.type}</div>)
}

export default Vardas;