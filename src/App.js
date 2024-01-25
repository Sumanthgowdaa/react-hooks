import { BrowserRouter, RouterProvider } from 'react-router-dom'

// import Header from './default/Header';
import React from 'react'
import { appRoute } from './appRoute/appRoute'

function App() {
  return (
      <RouterProvider router={appRoute} />
   
      
  )
}

export default App