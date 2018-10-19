import _ from 'lodash'
import { createSelector } from 'reselect'

const getFirstFoodItem = foods => _.get(foods, '[0]')

const getBeerStats = beer => {
  return [`Name: ${beer.name}`, `ABV: ${beer.abv}`, `ph: ${beer.ph}`]
}

const getSelectedAlcContentLower = (contentAmounts, selectedAmount) => {
  const contentAmountValues = _.map(contentAmounts, 'value')
  const orderedAmountValues = _.orderBy(contentAmountValues)
  const indexOfSelectedAlcContent = _.indexOf(orderedAmountValues, selectedAmount)
  console.log('index!!!!!: ', indexOfSelectedAlcContent)
  return indexOfSelectedAlcContent - 1 === -1 || orderedAmountValues[indexOfSelectedAlcContent - 1] === -1 ? null : orderedAmountValues[indexOfSelectedAlcContent - 1]
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
    const fullSelectedAlcoholContent = _.find(punkState.alcoholContentOptions, option => option.value === punkState.selectedAlcoholContent)
    const isFirstPage = punkState.page <= 1
    const alcContentLowerBoundry = getSelectedAlcContentLower(punkState.alcoholContentOptions, punkState.selectedAlcoholContent)
    return {
      ...punkState,
      beers: beers,
      isFirstPage: isFirstPage,
      fullSelectedAlcoholContent: fullSelectedAlcoholContent,
      alcContentLowerBoundry: alcContentLowerBoundry,
    }
  },
)
