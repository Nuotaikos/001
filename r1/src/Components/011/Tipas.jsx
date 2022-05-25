function Tipas({ seaPlaners }) {
  seaPlaners.sort((a, b) => {

    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });

  return seaPlaners.map((b, i) => <div style={{ color: b.color }} key={i}>{b.type} {b.name} </div>)
}

export default Tipas;