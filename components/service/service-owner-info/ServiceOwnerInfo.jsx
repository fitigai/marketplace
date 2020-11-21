import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'
import { Text } from '../../ui'

const ServiceOwnerInfo = ({ name }) => {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  )
}

ServiceOwnerInfo.propTypes = {
  name: PropTypes.string,
}

export default ServiceOwnerInfo
