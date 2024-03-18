import Navbar from '@/components/Shared/Navbar/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import React from 'react'

function CommonLayout({children}: {children: React.ReactNode}) {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">{children}</div>
        <Footer/>
    </>
  )
}

export default CommonLayout