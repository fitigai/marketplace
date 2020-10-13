import React from 'react'
import styled from 'styled-components'

import { COLOR } from '../../../utils'

export const StyledHeading = styled(({ is: El, ...props }) => (
  <El {...props} />
))`
  color: ${COLOR.MINE_SHAFT};
`
