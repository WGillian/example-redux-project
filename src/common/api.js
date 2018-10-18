import request from 'superagent'

const ApiRootUrl = 'https://api.punkapi.com/v2/beers'

export const createRequest = requestMethod => route => {
  return requestMethod(`${ApiRootUrl}${route}`)
}

export const apiGet = createRequest(request.get)
