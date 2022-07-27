import React from 'react'
import Navbar from './Navbar'
import "../styles/global.css"
import Footer from "./Footer"


function Layout({children}) {
  return (
    <>
    <Navbar />
    {
      children
    }
    <Footer />
    </>
  )
}

export default Layout