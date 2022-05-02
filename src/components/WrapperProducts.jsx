import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'

const WrapperProducts = () => {
  return (
    <div style={{paddingTop: 40}}>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default WrapperProducts;