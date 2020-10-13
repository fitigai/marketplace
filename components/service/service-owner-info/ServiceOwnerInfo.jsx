import React from 'react'

import { Container } from './style'
import { Heading, Text } from '../../ui'

const ServiceOwnerInfo = ({ name, avatar }) => {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  )
}

ServiceOwnerInfo.propTypes = {}

export default ServiceOwnerInfo
