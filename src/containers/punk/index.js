import React, { Component } from 'react'
import { connect } from 'react-redux'
import Div from 'components/core/div'
import Header from 'components/header'
import { getPaginatedBeers } from 'redux/actions/punk'

class PunkContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getPaginatedBeers())
  }

  render() {
    return (
      <Div>
        <Header />
        Hello World!
      </Div>
    )
  }
}

export default connect(state => state.punk)(PunkContainer)
