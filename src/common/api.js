import request from 'superagent'

const ApiRootUrl = 'https://api.punkapi.com/v2/beers'

export const createRequest = route => requestMethod => {
  return requestMethod(`${ApiRootUrl}${route}`)
}

export const apiGet = route => createRequest(route)(request.get)
