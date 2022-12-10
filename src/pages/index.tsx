import React from 'react'
import DefaultSeo from '../components/DefaultSeo'
import MainLayout from '../components/Layout/MainLayout'

function HomePage() {
  return (
    <MainLayout>
        <DefaultSeo/>
        <h1>Home Page</h1>
    </MainLayout>
  )
}

export default HomePage