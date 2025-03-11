"use client"

import { useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material"
import { useCart } from "../context/CartContext"

interface Burger {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface BurgerDetailModalProps {
  burger: Burger | null
  open: boolean
  onClose: () => void
}

export default function BurgerDetailModal({ burger, open, onClose }: BurgerDetailModalProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!burger) return null

  const handleAddToCart = () => {
    // Agregar la hamburguesa al carrito
    addToCart(
      {
        id: burger.id,
        name: burger.name,
        price: burger.price,
        image: burger.image,
      },
      quantity,
    )

    // Cerrar el modal y resetear la cantidad
    onClose()
    setQuantity(1)
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle sx={{ fontWeight: "bold", color: "#D32F2F", fontSize: "1.5rem" }}>{burger.name}</DialogTitle>
      <DialogContent>
        <img
          src={burger.image || "/placeholder.svg"}
          alt={burger.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "1rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        />
        <Typography variant="body1" sx={{ mb: 2 }}>
          {burger.description}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#D32F2F" }}>
          Precio: ${burger.price.toFixed(2)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
            border: "1px solid #ddd",
            borderRadius: "30px",
            width: "fit-content",
            padding: "5px 15px",
          }}
        >
          <Button onClick={() => setQuantity(Math.max(1, quantity - 1))} sx={{ minWidth: "40px", fontWeight: "bold" }}>
            -
          </Button>
          <Typography sx={{ margin: "0 15px", fontWeight: "bold" }}>{quantity}</Typography>
          <Button onClick={() => setQuantity(quantity + 1)} sx={{ minWidth: "40px", fontWeight: "bold" }}>
            +
          </Button>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: "16px 24px" }}>
        <Button
          onClick={onClose}
          sx={{
            color: "#666",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleAddToCart}
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "bold",
            padding: "8px 20px",
          }}
        >
          Agregar al carrito
        </Button>
      </DialogActions>
    </Dialog>
  )
}

