import React from 'react'
import Link from 'next/link'

import { LogoImage } from './style'

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Logo = () => (
  <Link href='/'>
    <a>
      <LogoImage
        src={`${assetPrefix}/images/logos/logo.svg`}
        alt='fitigaï logo'
      />
    </a>
  </Link>
)

export default Logo
