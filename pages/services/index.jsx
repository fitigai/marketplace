import React from 'react'

import TopBar from '../../components/layouts/top-bar'
import Footer from '../../components/layouts/footer'
import {
  ContainerWidthColumn,
  MainWithAside,
  Aside,
} from '../../styles/sharedStyles'
import ServiceDescription from '../../components/service/service-description'
import ServiceOwnerInfo from '../../components/service/service-owner-info'

const ServicesPage = ({ service }) => (
  <>
    <TopBar />
    <ContainerWidthColumn>
      <MainWithAside>
        <ServiceDescription
          title={service.title}
          description={service.description}
        />
        {JSON.stringify(service)}
      </MainWithAside>
      <Aside>
        <ServiceOwnerInfo
          name={service.user.name}
          avatar={service.user.avatar}
        />
      </Aside>
    </ContainerWidthColumn>
    <Footer />
  </>
)

export default ServicesPage

export async function getStaticProps() {
  // TODO: make the real API call
  const res = await fetch('http://localhost:3000/data/service.json')
  const service = await res.json()

  return {
    props: {
      service,
    },
  }
}
