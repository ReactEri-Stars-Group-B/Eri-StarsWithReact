
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
function Container() {
  return (
    <>
    <Header/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Container