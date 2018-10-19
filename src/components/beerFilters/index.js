import React, { Component } from 'react'
// import styled, { css } from 'styled-components'
// import _ from 'lodash'
import Div from 'components/core/div'
import Text from 'components/core/text'
import Input from 'components/core/input'
// import Spinner from 'components/core/spinner'

import Select from 'react-select'

const FilterFieldContainer = Div.extend`
  margin-top: 20px;
`

const FilterField = props => (
  <FilterFieldContainer>
    <Text>{props.label}</Text>
    {props.children}
  </FilterFieldContainer>
)

const DropDown = props => (
  <FilterField label={props.label}>
    <Select value={props.value} onChange={props.onChange} options={props.options} />
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
        <DropDown
          label="How boozy do you want to get?"
          value={this.props.selectedAlcoholContent}
          options={this.props.alcoholContentOptions}
          onChange={this.props.onSelectAlcoholContent}
        />
        <FilterField label="Find a beer that compliments your food">
          <Input value={this.props.food} onChange={event => this.props.onFoodInputUpdated(event.target.value)} />
        </FilterField>
      </FiltersContainer>
    )
  }
}
