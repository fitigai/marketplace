import React from 'react'
import styled from 'styled-components'

import { MEDIA_QUERY } from '../../../utils'

console.log('MEDIA_QUERY.MEDIUM_AND_DOWN', MEDIA_QUERY.MEDIUM_AND_DOWN)
export const ShortDescriptionContainer = styled.section`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;

  @media ${MEDIA_QUERY.MEDIUM_AND_DOWN} {
    flex-direction: column;
  }
`

export const ImageContainer = styled(({ isReversed, ...props }) => (
  <div {...props} />
))`
  width: 50%;
  order: ${({ isReversed }) => (isReversed ? 1 : 0)};

  @media ${MEDIA_QUERY.MEDIUM_AND_DOWN} {
    width: 100%;
    order: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const Content = styled(({ isReversed, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
  width: 50%;
  order: ${({ isReversed }) => (isReversed ? 0 : 1)};
  padding: 0 50px;

  @media ${MEDIA_QUERY.MEDIUM_AND_DOWN} {
    width: 100%;
    order: 0;
    padding: 50px 0;
    align-items: center;
  }

  > h1 {
    font-size: 2rem;
    margin-bottom: 30px;
    max-width: 450px;
  }

  > p {
    max-width: 450px;
  }
`
