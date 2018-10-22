import _ from 'lodash'
import { createSelector } from 'reselect'

const getBeerStats = beer => {
  const statOrUnknown = stat => stat || 'unknown'
  return [`Name: ${statOrUnknown(beer.name)}`, `ABV: ${statOrUnknown(beer.abv)}`, `ph: ${statOrUnknown(beer.ph)}`]
}

const shortenFoodPairing = foods => {
  const firstThreeFoods = _.slice(foods, 0, 3)
  return _.map(firstThreeFoods, food => _.truncate(food, { length: 22 }))
}

const getSelectedAlcContentLower = (contentAmounts, selectedAmount) => {
  const contentAmountValues = _.map(contentAmounts, 'value')
  const orderedAmountValues = _.orderBy(contentAmountValues)
  const indexOfSelectedAlcContent = _.indexOf(orderedAmountValues, selectedAmount)
  return indexOfSelectedAlcContent - 1 === -1 || orderedAmountValues[indexOfSelectedAlcContent - 1] === -1 ? null : orderedAmountValues[indexOfSelectedAlcContent - 1]
}

export const punkSelector = createSelector(
  state => state.punk,
  punkState => {
    const beers = _.map(punkState.beers, beer => ({
      ...beer,
      descriptionSummary: _.truncate(beer.description, { length: 80 }),
      stats: getBeerStats(beer),
      food: shortenFoodPairing(beer.food_pairing),
    }))
    const fullSelectedAlcoholContent = _.find(punkState.alcoholContentOptions, option => option.value === punkState.selectedAlcoholContent)
    const isFirstPage = punkState.page <= 1
    const alcContentLowerBoundry = getSelectedAlcContentLower(punkState.alcoholContentOptions, punkState.selectedAlcoholContent)
    return {
      ...punkState,
      beers: beers,
      isFirstPage: isFirstPage,
      fullSelectedAlcoholContent: fullSelectedAlcoholContent,
      alcContentLowerBoundry: alcContentLowerBoundry,
      noBeersError: _.isEmpty(beers) && !punkState.beersLoading ? `There are no beers that match your search` : null,
    }
  },
)
