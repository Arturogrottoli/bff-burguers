"use client"

import { useState } from "react"
import { AppBar, Toolbar, Typography, Button, Badge, IconButton, Box } from "@mui/material"
import { ShoppingCart, Fastfood } from "@mui/icons-material"
import CartDrawer from "./CartDrawer"
import { useCart } from "../context/CartContext"

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getTotalItems } = useCart()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#D32F2F" }}>
      <Toolbar>
        <Box
          onClick={() => window.scrollTo(0, 0)}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Fastfood sx={{ mr: 2, fontSize: 40 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            BFF
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" onClick={() => window.scrollTo(0, 0)}>
          Inicio
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("menu")}>
          Menú
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("contact")}>
          Contacto
        </Button>
        <IconButton color="inherit" onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={getTotalItems()} color="secondary" showZero>
            <ShoppingCart />
          </Badge>
        </IconButton>
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

