import React from 'react'
import Div from 'components/core/div'
import WarningIcon from 'assets/icons/warningIcon'
import Text from 'components/core/text'

const ErrorContainer = Div.extend`
  background-color: ${props => props.theme.brandSecondaryLight};
  flex-direction: row;
  height: 40px;
  align-items: center;
  padding: 0 15px;
  ${props => (props.error ? '' : 'display: none')};
`

const ErrorText = Text.extend`
  margin-left: 10px;
  color: ${props => props.theme.brandSecondary};
`

export default props => (
  <ErrorContainer error={props.error}>
    <WarningIcon />
    <ErrorText>{props.error}</ErrorText>
  </ErrorContainer>
)
