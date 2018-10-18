import { apiGet } from 'common/api'

export const getAllBeers = () => dispatch => {
  apiGet('', {}).then(response => dispatch({ type: 'punk/GET_BEERS', payload: response.body }))
}
