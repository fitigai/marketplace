import React from 'react'
import styled from 'styled-components'

// TODO: convert those breakpoint to variables
// 1128px
// 950px
// 744px
// 375px

export const Container = styled(({ zIndex, ...props }) => <div {...props} />)`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
  z-index: ${({ zIndex }) => zIndex};
`

Container.defaultProps = {
  zIndex: 0,
}

export const Main = styled.main`
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
`

export const ContainerWidthColumn = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const MainWithAside = styled.main`
  width: 58.333333333333336%;
`

export const Aside = styled.aside`
  width: 33.33%;
  margin-left: 60px;
`
