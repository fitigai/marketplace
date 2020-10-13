import React from 'react'

import { Heading, Text } from '../../ui'

const ServiceDescription = ({ title, description }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </>
  )
}

ServiceDescription.propTypes = {}

export default ServiceDescription
