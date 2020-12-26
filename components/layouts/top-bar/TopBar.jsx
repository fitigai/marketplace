import React from 'react'
import Link from 'next/link'

import { Header, Wrapper, Nav } from './style'
import { Logo } from '../../ui'
import { Container } from '../../../styles/sharedStyles'
import { APP_URL } from '../../../utils'

const TopBar = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo />
          <Nav>
            <Link href={APP_URL}>
              <a data-track='topbar-login'>Login</a>
            </Link>
          </Nav>
        </Wrapper>
      </Container>
    </Header>
  )
}

export default TopBar
