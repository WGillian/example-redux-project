import { getPaginatedBeers } from 'redux/actions/common/getBeers'

export const changePageNumber = (change, pageNumber) => async (dispatch, getState) => {
  const setPageNumber = change === 'SET' ? pageNumber : null
  console.log('setPage: ', setPageNumber)
  const newPageNumber = change === 'DECREMENT' ? pageNumber - 1 : pageNumber + 1

  await getPaginatedBeers(setPageNumber || newPageNumber)(dispatch, getState)

  dispatch({ type: `punk/${change}_PAGE`, payload: setPageNumber || newPageNumber })
}

export const incrementPage = pageNumber => (dispatch, getState) => {
  changePageNumber('INCREMENT', pageNumber)(dispatch, getState)
}

export const decrementPage = pageNumber => (dispatch, getState) => {
  changePageNumber('DECREMENT', pageNumber)(dispatch, getState)
}

export const updateFood = food => (dispatch, getState) => {
  dispatch({ type: 'punk/UPDATE_FOOD', payload: food })
  changePageNumber('SET', 1)(dispatch, getState)
}

export const selectAlcoholContent = option => ({ type: 'punk/SELECT_ALCOHOL_CONTENT', payload: option })

export const reloadBeers = () => state => dispatch => {
  changePageNumber('SET', 1)(dispatch, state)
}
