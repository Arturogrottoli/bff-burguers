"use client"

import type React from "react"
import { useState } from "react"
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from "@mui/material"
import { ShoppingCart, LocalDining } from "@mui/icons-material"
import { useRouter } from "next/router"
import { useCart } from "../context/CartContext"
import CartDrawer from "./CartDrawer"

const ClientSideNavbar: React.FC = () => {
  const router = useRouter()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getCartCount } = useCart()

  const handleCartOpen = () => {
    setIsCartOpen(true)
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#D32F2F" }}>
        <Toolbar>
          <LocalDining sx={{ mr: 2, fontSize: 40 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            BFF
          </Typography>
          <Button color="inherit" onClick={() => router.push("/")}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => router.push("/menu")}>
            Menú
          </Button>
          <Button color="inherit" onClick={() => router.push("/contacto")}>
            Contacto
          </Button>
          <IconButton color="inherit" onClick={handleCartOpen}>
            <Badge badgeContent={getCartCount()} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartDrawer open={isCartOpen} onClose={handleCartClose} />
    </>
  )
}

export default ClientSideNavbar

