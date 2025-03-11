"use client"

import { useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material"
import { useCart } from "../context/CartContext"

interface Item {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface ItemDetailModalProps {
  item: Item | null
  open: boolean
  onClose: () => void
}

export default function ItemDetailModal({ item, open, onClose }: ItemDetailModalProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!item) return null

  const handleAddToCart = () => {
    addToCart(
      {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      },
      quantity,
    )

    onClose()
    setQuantity(1)
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle sx={{ fontWeight: "bold", color: "#D32F2F", fontSize: "1.5rem" }}>{item.name}</DialogTitle>
      <DialogContent>
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "1rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        />
        <Typography variant="body1" sx={{ mb: 2 }}>
          {item.description}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#D32F2F" }}>
          Precio: ${item.price.toFixed(2)}
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

