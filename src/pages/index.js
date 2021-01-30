/* eslint-disable max-lines-per-function */
import React from 'react'
import Layout from '@/components/layout/layout'
import Seo from '@/components/layout/seo'
import Container from '@/components/shared/container'
import Contact from './contact'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Container>
        <Contact />
      </Container>
    </Layout>
  )
}

export default IndexPage
