/* eslint-disable no-shadow */
const initialState = {
  page: 1,
  beers: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'punk/GET_BEERS_SUCCESS':
      return { ...state, beers: action.payload }
    case 'punk/INCREMENT_PAGE':
      return { ...state, page: action.payload }
    case 'punk/DECREMENT_PAGE':
      return { ...state, page: action.payload }
    default:
      return state
  }
}
