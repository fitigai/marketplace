import React from 'react'

import { Main } from '../styles/sharedStyles'
import TopBar from '../components/layouts/top-bar'
import Footer from '../components/layouts/footer'
import HomeHeader from '../components/sections/home-header'

const IndexPage = () => (
  <>
    <TopBar />
    <Main>
      <HomeHeader />
    </Main>
    <Footer />
  </>
)

export default IndexPage
