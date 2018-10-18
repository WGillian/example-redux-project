/* eslint-disable no-shadow */
const initialState = {
  page: 1,
  beers: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'punk/GET_BEERS':
      return { ...state, beers: action.payload }
    default:
      return state
  }
}
