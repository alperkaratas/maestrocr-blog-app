export function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      state.data.counter = state.data.counter + 1;
      return {...state};

    case 'DECREASE_COUNTER':
      state.data.counter = state.data.counter - 1;
      return {...state};

    case 'REFRESH_COUNTER':
      state.data.counter = 0;
      return {...state};

    default:
      return state;
  }
}
