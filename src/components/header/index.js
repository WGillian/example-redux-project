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
`

const HeaderResponsiveContainer = styled(ResponsiveContainer)`
  justify-content: center;
`

const Heading = styled.h1`
  color: ${props => props.theme.headingColor};
`

export default () => (
  <HeaderContainer>
    <HeaderResponsiveContainer>
      <Heading>{"Let's Explore the Punk API"}</Heading>
    </HeaderResponsiveContainer>
  </HeaderContainer>
)
