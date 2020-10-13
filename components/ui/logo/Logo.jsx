import React from 'react'
import Link from 'next/link'

import { LogoImage } from './style'

const Logo = () => (
  <Link href='/'>
    <a>
      <LogoImage src='/images/logos/logo.svg' alt='fitigaï logo' />
    </a>
  </Link>
)

export default Logo
