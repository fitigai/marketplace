import React from 'react'
import Link from 'next/link'

import { Header, Wrapper, Nav } from './style'
import { Logo } from '../../ui'
import { Container } from '../../../styles/sharedStyles'

const TopBar = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo />
          <Nav>
            <Link href='/services'>
              <a>Services</a>
            </Link>
          </Nav>
        </Wrapper>
      </Container>
    </Header>
  )
}

export default TopBar
