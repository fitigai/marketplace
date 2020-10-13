import React from 'react'

import { StyledHeading } from './style.js'

const Heading = ({ level, ...props }) => {
  const El = `h${level}`

  return <StyledHeading is={El} {...props} />
}

Heading.defaultProps = {
  level: 1,
}

export default Heading
