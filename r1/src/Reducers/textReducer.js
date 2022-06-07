function colorReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'go_text':
      newState = action.payload;
      break;
    default:
      newState = state;
  }
  return newState;
}

export default colorReducer;