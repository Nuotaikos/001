import rand from '../Functions/rand';
import randColor from '../Functions/randColor';



function listReducer(state, action) {
  let newState;
  switch (action.type) {
    case "new":
      newState = [...Array(10)].map((_, i) => ({
        number: ("" + rand(0, 9999)).padStart(4, 0),
        color: randColor(),
        show: true,
        row: i
      }));
      // newState = [];
      // for (let i = 0; i < 10; i++) {
      //     newState.push(('' + rand(0, 9999)).padStart(4, 0));
      // }
      break;
    case "sort":
      newState = [...state].sort((a, b) => {
        if (a.number > b.number) return -1;
        if (a.number < b.number) return 1;
        return 0;
      });
      break;
    case "f5000":
      newState = state.map(o => o.number > 5000 ? { ...o, show: true } : { ...o, show: false })
      break;
    case "f4000":
      newState = state.map(o => o.number < 4000 ? { ...o, show: true } : { ...o, show: false })
      break;
    case 'add':
      newState = [...state, {
        number: ("" + rand(0, 9999)).padStart(4, 0),
        color: "black",
        show: true,
        row: state.lenght
      }];

      break;

    default:
      newState = [...state];
  }

  return newState;
}

export default listReducer;