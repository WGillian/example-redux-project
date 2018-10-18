import _ from 'lodash'
import { createSelector } from 'reselect'

const getFirstFoodItem = foods => _.get(foods, '[0]')

const getBeerStats = beer => {
  return [`Name: ${beer.name}`, `ABV: ${beer.abv}`, `ph: ${beer.ph}`]
}

export const punkSelector = createSelector(
  state => state.punk,
  punkState => {
    const beers = _.map(punkState.beers, beer => ({
      ...beer,
      foodSummary: getFirstFoodItem(beer.food_pairing),
      descriptionSummary: _.truncate(beer.description),
      stats: getBeerStats(beer),
    }))
    const isFirstPage = punkState.page <= 1
    return {
      ...punkState,
      beers: beers,
      isFirstPage: isFirstPage,
    }
  },
)
