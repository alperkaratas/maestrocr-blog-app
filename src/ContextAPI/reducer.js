export function reducer(state, action) {
  switch (action.type) {
    case 'SAVE_RESPONSE':
      state.data = action.data;
      return {...state};
    case 'SEARCH_DATA':
      state.data = action.data;
      return {...state};
    default:
      return state;
  }
}
