import React from 'react'
import styled from 'styled-components'

import { COLOR } from '../../../utils'

export const StyledText = styled(({ is: El, ...props }) => <El {...props} />)`
  color: ${COLOR.MINE_SHAFT};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
