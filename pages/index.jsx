import React from 'react'

import { Main } from '../styles/sharedStyles'
import Head from '../components/layouts/head'
import TopBar from '../components/layouts/top-bar'
import Footer from '../components/layouts/footer'
import HomeHeader from '../components/sections/home-header'
import ShortDescription from '../components/sections/short-description'

const IndexPage = () => (
  <>
    <Head />
    <TopBar />
    <Main>
      <HomeHeader />
      <ShortDescription
        imageName='illu-jogging.svg'
        title='Let the sport transform you'
        description="We help you to increase your health based on exercise, you'll definitely match your body with your mind through the sport."
      />
      <ShortDescription
        imageName='illu-support.svg'
        title='Personal trainer at your service'
        description='We worked with professionals who can deeply detect what can help you based on your own criteria.'
        isReversed
      />
      <ShortDescription
        imageName='illu-yoga.svg'
        title='Receive the best tailor-made program'
        description='Every coach will build the program who correspond to you and your need, without causing any pain.'
      />
    </Main>
    <Footer />
  </>
)

export default IndexPage
