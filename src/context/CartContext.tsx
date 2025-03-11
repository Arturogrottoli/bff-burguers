"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

// Definir la estructura de un item del carrito
export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

// Definir la interfaz del contexto
interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined)

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

// Proveedor del contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  // Agregar un item al carrito
  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setItems((prevItems) => {
      // Buscar si el item ya existe en el carrito
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id)

      if (existingItemIndex >= 0) {
        // Si existe, actualizar la cantidad
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += quantity
        return updatedItems
      } else {
        // Si no existe, agregar como nuevo item
        return [...prevItems, { ...item, quantity }]
      }
    })
  }

  // Eliminar un item del carrito
  const removeFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // Limpiar el carrito
  const clearCart = () => {
    setItems([])
  }

  // Obtener el total de items en el carrito
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  // Obtener el precio total del carrito
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

