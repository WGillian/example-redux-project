import { apiGet } from 'common/api'

export const getPaginatedBeers = () => dispatch => {
  apiGet('/')
    .query({
      page: 1,
      per_page: 10,
    })
    .then(response => dispatch({ type: 'punk/GET_BEERS', payload: response.body }))
}
