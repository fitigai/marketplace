import React from 'react'
import styled from 'styled-components'

export const HomeHeaderContainer = styled(({ backgroundImage, ...props }) => (
  <section {...props} />
))`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  height: calc(100vh - 65px);
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

  > h1 {
    font-size: 4rem;
    color: white;
    margin-bottom: 30px;
  }

  > p {
    color: white;
    max-width: 450px;
  }
`
