import Header from '../default/Header'
import {Outlet} from 'react-router-dom'
import React from 'react'

function RouteContainer() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}


export default RouteContainer
