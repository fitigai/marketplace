import React from 'react'

import { HomeHeaderContainer, Content, Overlay } from './style'
import { Heading, Text } from '../../ui'
import { ASSETS_PREFIX } from '../../../utils'
import { Container } from '../../../styles/sharedStyles'

const HomeHeader = () => (
  <HomeHeaderContainer backgroundImage={`${ASSETS_PREFIX}/images/walking.jpg`}>
    <Overlay />
    <Container>
      <Content>
        <Heading>Fit your inner soul</Heading>
        <Text>
          Be in harmony with yourself, find the best mentor who will provide you
          the perfect training program
        </Text>
      </Content>
    </Container>
  </HomeHeaderContainer>
)

export default HomeHeader
