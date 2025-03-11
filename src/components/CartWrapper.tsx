import type React from "react"
import { CartProvider } from "../context/CartContext"

export const CartWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>
}

