import React from 'react'

import { Header, Wrapper } from './style'
import { Logo } from '../../ui'
import { Container } from '../../../styles/sharedStyles'

const TopBar = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo />
          <nav>
            <a href='/'>Home</a>
          </nav>
        </Wrapper>
      </Container>
    </Header>
  )
}

export default TopBar
