import React from 'react'

import { StyledText } from './style.js'

const Text = ({ is, ...props }) => {
  return <StyledText is={is} {...props} />
}

Text.defaultProps = {
  is: 'p',
}

export default Text
