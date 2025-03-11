import type React from "react"
import { CartProvider } from "../context/CartContext"
import Navbar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <Navbar />
      {children}
    </CartProvider>
  )
}

export default Layout

