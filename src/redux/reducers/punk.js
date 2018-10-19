/* eslint-disable no-shadow */
const initialState = {
  page: 1,
  beers: [],
  beersLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'punk/GET_BEERS_REQUEST':
      return { ...state, beersLoading: true }
    case 'punk/GET_BEERS_SUCCESS':
      return { ...state, beers: action.payload, beersLoading: false }
    case 'punk/INCREMENT_PAGE':
      return { ...state, page: action.payload }
    case 'punk/DECREMENT_PAGE':
      return { ...state, page: action.payload }
    default:
      return state
  }
}
