import styled from 'styled-components'

import { COLOR } from '../../../utils'

export const Header = styled.header`
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${COLOR.GALLERY};
  z-index: 10;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`
