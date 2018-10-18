import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from 'components/header'
import Div from 'components/core/div'
import ResponsiveContainer from 'components/core/responsiveContainer'
import ScrollBeers from 'components/scrollBeers'
import { getPaginatedBeers, incrementPage, decrementPage } from 'redux/actions/punk'
import { punkSelector } from 'redux/selectors/punk'

const MainContentResponsiveContainer = ResponsiveContainer.extend`
  margin-top: 100px;
`

class PunkContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getPaginatedBeers(this.props.page))
  }

  render() {
    console.log(this.props)
    if (this.props.loadingBeers) {
      return <h1>Loading...</h1>
    }
    return (
      <Div>
        <Header />
        <MainContentResponsiveContainer>
          <ScrollBeers
            beers={this.props.beers}
            isFirstPage={this.props.isFirstPage}
            onIncrementPage={() => this.props.dispatch(incrementPage(this.props.page))}
            onDecrementPage={() => this.props.dispatch(decrementPage(this.props.page))}
          />
        </MainContentResponsiveContainer>
      </Div>
    )
  }
}

export default connect(state => punkSelector(state))(PunkContainer)
