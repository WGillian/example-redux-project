import { apiGet } from 'common/api'

export const getPaginatedBeers = pageNumber => dispatch => {
  dispatch({ type: 'punk/GET_BEERS_REQUEST' })
  try {
    apiGet('/')
      .query({
        page: pageNumber,
        per_page: 4,
      })
      .then(response => dispatch({ type: 'punk/GET_BEERS_SUCCESS', payload: response.body }))
  } catch (error) {
    dispatch({ type: 'punk/GET_BEERS_ERROR', payload: error })
  }
}

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
