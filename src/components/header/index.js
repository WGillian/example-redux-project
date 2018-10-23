import React from 'react'
import styled from 'styled-components'
import Div from 'components/core/div'
import ResponsiveContainer from 'components/core/responsiveContainer'

const HeaderContainer = Div.extend`
  background-color: ${props => props.theme.brandPrimary};
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

const HeaderResponsiveContainer = ResponsiveContainer.extend`
  justify-content: center;
  height: 100px;
`

const Heading = styled.h1`
  color: ${props => props.theme.primaryHeadingColor};
`

export default () => (
  <HeaderContainer>
    <HeaderResponsiveContainer>
      <Heading>{"Let's Explore the Punk API"}</Heading>
    </HeaderResponsiveContainer>
  </HeaderContainer>
)
