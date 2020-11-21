import React from 'react'
import Link from 'next/link'

import { LogoImage } from './style'
import { ASSETS_PREFIX } from '../../../utils'

const Logo = () => (
  <Link href='/'>
    <a>
      <LogoImage
        src={`${ASSETS_PREFIX}/images/logos/logo.svg`}
        alt='fitigaï logo'
      />
    </a>
  </Link>
)

export default Logo
