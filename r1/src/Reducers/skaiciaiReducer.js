import rand from "../Functions/rand";

function skaiciaiReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'go_sk1':
      newState = ('' + rand(0, 9999)).padStart(4, '0');
      break;
    case 'go_sk2':
      newState = ('' + action.payload).padStart(4, '0');
      break;

    default:
      newState = state;
  }
  return newState;
}

export default skaiciaiReducer;