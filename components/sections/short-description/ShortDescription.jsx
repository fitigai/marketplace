import React from 'react'
import PropTypes from 'prop-types'

import {
  ShortDescriptionContainer,
  Wrapper,
  Content,
  ImageContainer,
  Image,
} from './style'
import { Heading, Text } from '../../ui'
import { ASSETS_PREFIX } from '../../../utils'
import { Container } from '../../../styles/sharedStyles'

const ShortDescription = ({ imageName, title, description, isReversed }) => (
  <ShortDescriptionContainer>
    <Container>
      <Wrapper>
        <ImageContainer isReversed={isReversed}>
          <Image
            src={`${ASSETS_PREFIX}/images/${imageName}`}
            alt='sport illustration'
          />
        </ImageContainer>
        <Content isReversed={isReversed}>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </Content>
      </Wrapper>
    </Container>
  </ShortDescriptionContainer>
)

ShortDescription.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
  description: PropTypes.string.isRequired,
}

ShortDescription.defaultProps = {
  isReversed: false,
}

export default ShortDescription
