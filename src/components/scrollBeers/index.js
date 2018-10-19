import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import Div from 'components/core/div'
import Text from 'components/core/text'
import { DownArrow, UpArrow } from 'assets/icons/arrows'

const ScrollBeersContainer = Div.extend`
  padding: 80px;
`

const UpPanel = Div.extend`
  border-radius: 50px 50px 0 0;
  background-color: ${props => props.theme.brandPrimary};
  height: 80px;
  margin: 0 160px;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${props => (props.isClickable ? 'cursor: pointer' : '')};
`

const DownPanel = styled(UpPanel)`
  border-radius: 0 0 50px 50px;
  cursor: pointer;
`

const ScrollPanel = Div.extend`
  border: ${props => (props.loading ? 'none' : props.theme.border)};
  border-radius: 30px;
  box-shadow: ${props => props.theme.boxShadow};
`

const BeerContainer = Div.extend`
  padding: 10px 30px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`
const BeerImage = styled.img`
  height: 60px;
`
const ImageContainer = Div.extend`
  height: 60px;
  width: 60px;
  align-items: center;
  margin-right: 30px;
`
const Stats = Div.extend`
  flex: 1;
  margin: 0 10px;
`

const BeerDetails = props => (
  <Stats>
    {_.map(props.text, (text, i) => (
      <Text key={i}>{text}</Text>
    ))}
  </Stats>
)

const BeerDisplay = props => {
  const beer = props.beer
  return (
    <BeerContainer>
      <ImageContainer>
        <BeerImage src={beer.image_url} />
      </ImageContainer>
      <BeerDetails text={beer.stats} />
      <BeerDetails text={[beer.descriptionSummary]} />
      <BeerDetails text={[beer.foodSummary]} />
    </BeerContainer>
  )
}

class ScrollBeers extends Component {
  render() {
    const isClickable = !this.props.isFirstPage
    return (
      <ScrollBeersContainer>
        <UpPanel isClickable={isClickable} onClick={isClickable ? () => this.props.onDecrementPage() : () => null}>
          {isClickable ? <UpArrow /> : null}
        </UpPanel>
        <ScrollPanel>
          {_.map(this.props.beers, beer => (
            <BeerDisplay beer={beer} key={beer.id} />
          ))}
        </ScrollPanel>
        <DownPanel onClick={() => this.props.onIncrementPage()}>
          <DownArrow />
        </DownPanel>
      </ScrollBeersContainer>
    )
  }
}

ScrollBeers.defaultProps = {
  isFirstPage: true,
}

export default ScrollBeers
