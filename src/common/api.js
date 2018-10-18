import request from 'superagent'

const ApiRootUrl = 'https://api.punkapi.com/v2/beers'

export const apiGet = (route, queryParams) => {
  return request.get(`${ApiRootUrl}${route}`).query(queryParams)
}
