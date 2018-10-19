import React, { Component } from 'react'
// import styled, { css } from 'styled-components'
// import _ from 'lodash'
import Div from 'components/core/div'
import Text from 'components/core/text'
// import Spinner from 'components/core/spinner'

const FiltersContainer = Div.extend`
  min-width: 200px;
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 15px;
  margin-bottom: 40px;
  padding: 20px;
`

export default class BeerFilters extends Component {
  render() {
    return (
      <FiltersContainer>
        <Text>Add your favuorite tastes to filter your search</Text>
      </FiltersContainer>
    )
  }
}
