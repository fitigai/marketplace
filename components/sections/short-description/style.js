import React from 'react'
import styled from 'styled-components'

export const ShortDescriptionContainer = styled.section`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
`

export const ImageContainer = styled(({ isReversed, ...props }) => (
  <div {...props} />
))`
  width: 50%;
  order: ${({ isReversed }) => (isReversed ? 1 : 0)};
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
  width: 50%;
  order: ${({ isReversed }) => (isReversed ? 0 : 1)};

  > h1 {
    font-size: 2rem;
    margin-bottom: 30px;
    max-width: 500px;
  }

  > p {
    max-width: 450px;
  }
`
