import React, { Component } from 'react'
import Div from 'components/core/div'
import Text from 'components/core/text'
import Input from 'components/core/input'
import DropDown from 'components/core/dropDown'

const FilterFieldContainer = Div.extend`
  margin-top: 20px;
`

const FilterField = props => (
  <FilterFieldContainer>
    <Text>{props.label}</Text>
    {props.children}
  </FilterFieldContainer>
)

const DropDownField = props => (
  <FilterField label={props.label}>
    <DropDown value={props.value} onChange={props.onChange} options={props.options} />
  </FilterField>
)

const SearchBox = props => (
  <FilterField label={props.label}>
    <Input value={props.value} onChange={event => props.onChange(event.target.value)} />
  </FilterField>
)

const FiltersContainer = Div.extend`
  min-width: 200px;
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 15px;
  margin-bottom: 40px;
  padding: 20px;
  position: sticky;
  height: auto;
  align-self: flex-start;
  top: 140px;
`

export default class BeerFilters extends Component {
  render() {
    return (
      <FiltersContainer>
        <Text>Add your favourite tastes to filter your search</Text>
        <DropDownField
          label="Filter beers by alcohol content"
          value={this.props.selectedAlcoholContent}
          options={this.props.alcoholContentOptions}
          onChange={this.props.onSelectAlcoholContent}
        />
        <SearchBox label="Find a beer that compliments your food" value={this.props.food} onChange={this.props.onFoodInputUpdated} />
        <DropDownField label="Filter beers by malt type" value={this.props.selectedMalt} options={this.props.maltOptions} onChange={this.props.onSelectMalt} />
      </FiltersContainer>
    )
  }
}
