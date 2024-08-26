import React from 'react'
import routes from './Routes'
import { useRoutes } from 'react-router-dom'
import CartContextProvider from './Context/CartContext'

export default function App() {
  const router = useRoutes(routes)

  return (
    <CartContextProvider>
      {router}
    </CartContextProvider>
  )
}
