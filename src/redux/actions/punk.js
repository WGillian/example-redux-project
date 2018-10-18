import { apiGet } from 'common/api'

export const getPaginatedBeers = pageNumber => dispatch => {
  apiGet('/')
    .query({
      page: pageNumber,
      per_page: 4,
    })
    .then(response => dispatch({ type: 'punk/GET_BEERS', payload: response.body }))
}
