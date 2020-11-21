import React from 'react'
import styled from 'styled-components'

import { MEDIA_QUERY } from '../../../utils'

export const HomeHeaderContainer = styled(({ backgroundImage, ...props }) => (
  <section {...props} />
))`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  min-height: calc(100vh - 65px);
  display: flex;
  align-items: center;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &:after {
    position: absolute;
    content: '';
    background-color: #0005;
    height: 100%;
    width: 100%;
  }
`

export const Content = styled.div`
  /* 
   * Position relative is needed to allow the 
   * stack order (z-index) to work properly 
   */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;

  @media ${MEDIA_QUERY.MEDIUM_AND_DOWN} {
    padding-left: 0;
  }

  > h1 {
    font-size: 5rem;
    color: white;
    margin-bottom: 30px;

    @media ${MEDIA_QUERY.MEDIUM_AND_DOWN} {
      font-size: 3.5rem;
    }
  }

  > p {
    color: white;
    max-width: 450px;
    font-size: 1.2rem;

    @media ${MEDIA_QUERY.MEDIUM_AND_DOWN} {
      font-size: 1rem;
    }
  }
`
