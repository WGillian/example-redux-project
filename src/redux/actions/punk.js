import { getPaginatedBeers } from 'redux/actions/common/getBeers'

const getNewPageNumber = (change, pageNumber) => {
  if (change === 'DECREMENT') {
    return pageNumber - 1
  }
  if (change === 'INCREMENT') {
    return pageNumber + 1
  }
  if (change === 'SET') {
    return pageNumber
  }
  return pageNumber
}

const changePage = (change, pageNumber) => async (dispatch, getState) => {
  const newPageNumber = getNewPageNumber(change, pageNumber)

  await getPaginatedBeers(newPageNumber)(dispatch, getState)

  dispatch({ type: `punk/${change}_PAGE`, payload: newPageNumber })
}

export const incrementPage = pageNumber => (dispatch, getState) => {
  changePage('INCREMENT', pageNumber)(dispatch, getState)
}

export const decrementPage = pageNumber => (dispatch, getState) => {
  changePage('DECREMENT', pageNumber)(dispatch, getState)
}

export const updateFood = food => (dispatch, getState) => {
  dispatch({ type: 'punk/UPDATE_FOOD', payload: food })
  changePage('SET', 1)(dispatch, getState)
}

export const selectAlcoholContent = option => ({ type: 'punk/SELECT_ALCOHOL_CONTENT', payload: option })

export const reloadBeers = () => state => dispatch => {
  changePage('SET', 1)(dispatch, state)
}

export const selectMalt = malt => ({ type: 'punk/SELECT_MALT', payload: malt })
