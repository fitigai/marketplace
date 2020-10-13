import React from 'react'

import { Footer } from './style'
import { Container } from '../../../styles/sharedStyles'

const FooterSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Footer>
      <Container>
        Copyright © {currentYear} Fitigaï. All rights reserved.
      </Container>
    </Footer>
  )
}

export default FooterSection
