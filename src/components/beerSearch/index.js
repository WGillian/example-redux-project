import React from 'react'
import BeerFilters from 'components/beerFilters'
import ScrollBeers from 'components/scrollBeers'
import Div from 'components/core/div'

const SearchContainer = Div.extend`
  flex-direction: row;
  margin-top: 80px;
`

export default props => (
  <SearchContainer>
    <BeerFilters
      food={props.food}
      onFoodInputUpdated={props.onFoodInputUpdated}
      selectedAlcoholContent={props.selectedAlcoholContent}
      alcoholContentOptions={props.alcoholContentOptions}
      onSelectAlcoholContent={props.onSelectAlcoholContent}
      selectedMalt={props.selectedMalt}
      maltOptions={props.maltOptions}
      onSelectMalt={props.onSelectMalt}
    />
    <ScrollBeers
      beers={props.beers}
      isFirstPage={props.isFirstPage}
      beersLoading={props.beersLoading}
      noBeersError={props.noBeersError}
      onIncrementPage={props.onIncrementPage}
      onDecrementPage={props.onDecrementPage}
    />
  </SearchContainer>
)
