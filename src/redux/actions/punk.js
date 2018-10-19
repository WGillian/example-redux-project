import { getPaginatedBeers } from 'redux/actions/common/getBeers'

export const changePageNumber = (change, pageNumber) => async dispatch => {
  const newPageNumber = change === 'DECREMENT' ? pageNumber - 1 : pageNumber + 1

  await getPaginatedBeers(newPageNumber)(dispatch)

  dispatch({ type: `punk/${change}_PAGE`, payload: newPageNumber })
}

export const incrementPage = pageNumber => dispatch => {
  changePageNumber('INCREMENT', pageNumber)(dispatch)
}

export const decrementPage = pageNumber => dispatch => {
  changePageNumber('DECREMENT', pageNumber)(dispatch)
}

export const updateFood = food => (dispatch, getState) => {
  dispatch({ type: 'punk/UPDATE_FOOD', payload: food })
  getPaginatedBeers(1)(dispatch, getState)
}

export const selectAlcoholContent = option => ({ type: 'punk/SELECT_ALCOHOL_CONTENT', payload: option })
