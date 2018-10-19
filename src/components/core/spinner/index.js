import React from 'react'
import Div from 'components/core/div'
import { BounceLoader } from 'react-spinners'

const SpinnerContainer = Div.extend`
  ${props => props.spinnerContainerStyle};
  background-color: #fff;
  opacity: ${props => (props.loading ? '0.4' : '1')};
  align-items: center;
  justify-content: center;
`
const SpinnerInnerContainer = Div.extend`
  ${props => (props.loading ? '' : 'display: none')} position: absolute;
`

export default props => (
  <SpinnerContainer spinnerContainerStyle={props.spinnerContainerStyle} loading={props.loading}>
    {props.children}
    <SpinnerInnerContainer loading={props.loading}>
      <BounceLoader sizeUnit={'px'} size={150} color={'#36d7b7'} loading={props.loading} />
    </SpinnerInnerContainer>
  </SpinnerContainer>
)
