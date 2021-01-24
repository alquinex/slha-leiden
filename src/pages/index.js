/* eslint-disable max-lines-per-function */
import React from 'react'
import Layout from '@/components/layout/layout'
import Seo from '@/components/layout/seo'
import Container from '@/components/shared/container'
import Hero from '@/components/layout/hero'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Container>
        <Hero />
      </Container>
    </Layout>
  )
}

export default IndexPage
