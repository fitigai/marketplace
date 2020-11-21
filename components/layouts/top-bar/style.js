import styled from 'styled-components'

import { COLOR } from '../../../utils'

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  border-bottom: 1px solid ${COLOR.GALLERY};
  z-index: 10;
  background-color: white;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  height: 100%;

  > a {
    text-decoration: none;
    color: ${COLOR.MINE_SHAFT};
    font-weight: bold;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;

    &:last-child {
      padding-right: 0;
    }
  }
`
