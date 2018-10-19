/* eslint-disable no-shadow */
const initialState = {
  page: 1,
  beers: [],
  beersLoading: false,
  food: '',
  alcoholContentOptions: [
    { value: -1, label: 'All' },
    { value: 2, label: 'Less than 2%' },
    { value: 5, label: 'Less than 5%' },
    { value: 10, label: 'Less than 10%' },
    { value: 11, label: 'Above 10%' },
  ],
  selectedAlcoholContent: -1,
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
    case 'punk/UPDATE_FOOD':
      return { ...state, food: action.payload }
    case 'punk/SELECT_ALCOHOL_CONTENT':
      return { ...state, selectedAlcoholContent: action.payload }
    default:
      return state
  }
}
