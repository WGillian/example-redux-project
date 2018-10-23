import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from 'components/header'
import Div from 'components/core/div'
import ResponsiveContainer from 'components/core/responsiveContainer'
import SearchBeer from 'components/beerSearch'
import { incrementPage, decrementPage, updateFood, selectAlcoholContent, reloadBeers, selectMalt } from 'redux/actions/punk'
import { getPaginatedBeers } from 'redux/actions/common/getBeers'
import { punkSelector } from 'redux/selectors/punk'

const MainContentResponsiveContainer = ResponsiveContainer.extend`
  margin-top: 100px;
`

class PunkContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getPaginatedBeers(this.props.page))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedAlcoholContent !== prevProps.selectedAlcoholContent || this.props.selectedMalt !== prevProps.selectedMalt) {
      this.props.dispatch(reloadBeers()(this.props))
    }
  }

  render() {
    return (
      <Div>
        <Header />
        <MainContentResponsiveContainer>
          <SearchBeer
            beers={this.props.beers}
            isFirstPage={this.props.isFirstPage}
            beersLoading={this.props.beersLoading}
            food={this.props.food}
            selectedAlcoholContent={this.props.fullSelectedAlcoholContent}
            alcoholContentOptions={this.props.alcoholContentOptions}
            noBeersError={this.props.noBeersError}
            onIncrementPage={() => this.props.dispatch(incrementPage(this.props.page))}
            onDecrementPage={() => this.props.dispatch(decrementPage(this.props.page))}
            onFoodInputUpdated={food => this.props.dispatch(updateFood(food))}
            onSelectAlcoholContent={option => this.props.dispatch(selectAlcoholContent(option.value))}
            selectedMalt={this.props.selectedMalt}
            maltOptions={this.props.maltOptions}
            onSelectMalt={malt => this.props.dispatch(selectMalt(malt))}
          />
        </MainContentResponsiveContainer>
      </Div>
    )
  }
}

export default connect(state => punkSelector(state))(PunkContainer)
