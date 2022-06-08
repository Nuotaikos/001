function allReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'go_bl':
      newState = 'blue';
      break;
    case 'go_pink':
      newState = 'pink';
      break;
    default:
      newState = state;
  }
  return newState;
}

export default allReducer;