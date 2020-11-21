import React from 'react'
import PropTypes from 'prop-types'

import { Heading, Text } from '../../ui'

const ServiceDescription = ({ title, description }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </>
  )
}

ServiceDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ServiceDescription
