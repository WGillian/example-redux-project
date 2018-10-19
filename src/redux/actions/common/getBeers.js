import _ from 'lodash'
import { apiGet } from 'common/api'

export const getPaginatedBeers = pageNumber => (dispatch, getState) => {
  const potentialQueryParams = getState().punk
  const queryParams = _.omitBy(
    {
      food: _.isEmpty(potentialQueryParams.food) ? null : potentialQueryParams.food,
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
