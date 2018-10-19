import _ from 'lodash'
import { apiGet } from 'common/api'

export const getPaginatedBeers = pageNumber => (dispatch, getState) => {
  const punkState = _.isFunction(getState) ? getState().punk : getState
  console.log('gilllian', punkState)
  const queryParams = _.omitBy(
    {
      food: _.isEmpty(punkState.food) ? null : punkState.food,
      abv_lt: punkState.selectedAlcoholContent === -1 || punkState.selectedAlcoholContent === 11 ? null : punkState.selectedAlcoholContent,
      abv_gt: punkState.selectedAlcoholContent === 11 ? punkState.selectedAlcoholContent : punkState.alcContentLowerBoundry,
    },
    _.isNil,
  )

  dispatch({ type: 'punk/GET_BEERS_REQUEST' })
  try {
    apiGet('/')
      .query({
        page: pageNumber,
        per_page: 4,
        ...queryParams,
      })
      .then(response => dispatch({ type: 'punk/GET_BEERS_SUCCESS', payload: response.body }))
  } catch (error) {
    dispatch({ type: 'punk/GET_BEERS_ERROR', payload: error })
  }
}
