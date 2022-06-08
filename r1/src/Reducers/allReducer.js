function allReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'go_bl':
      newState = 'blue';
      break;
    case 'go_pink':
      newState = 'pink';
      break;
    case 'go_w':
      newState = 'white';
      break;
    case 'go_keisk':
      newState = state === 'red' ? 'pink' : 'red'
      break;
    default:
      newState = state;
  }
  return newState;
}

export default allReducer;