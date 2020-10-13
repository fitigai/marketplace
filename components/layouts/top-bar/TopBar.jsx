import React from 'react'

import { Logo } from '../../ui'

const TopBar = () => {
  return (
    <header>
      <Logo />
      <nav>
        <a href='/'>Home</a>
      </nav>
    </header>
  )
}

export default TopBar
