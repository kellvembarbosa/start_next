import React from 'react'
import Footer from './Footer'
import Header from './Header'

function MainLayout({ children } : { children: React.ReactNode }) {
  return (
    <div>
        <Header />
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            { children }
            </div>
        <Footer />
    </div>
  )
}

export default MainLayout