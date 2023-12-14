import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const RootElement = () => {
  return (
    <>
     <Header/>
     <Outlet/>
      
    </>
  )
}

export default RootElement
