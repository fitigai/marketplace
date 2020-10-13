import React from 'react'
import Link from 'next/link'

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
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/services'>
              <a>Services</a>
            </Link>
          </nav>
        </Wrapper>
      </Container>
    </Header>
  )
}

export default TopBar
