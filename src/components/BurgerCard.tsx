"use client"

import type React from "react"
import { Card, CardContent, CardMedia, Typography, Button, Box, IconButton } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import { useCart } from "../context/CartContext"

interface Item {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface ItemCardProps {
  item: Item
  onOpenDetails: (item: Item) => void
}

export default function ItemCard({ item, onOpenDetails }: ItemCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(
      {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      },
      1,
    )
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia component="img" height="200" image={item.image} alt={item.name} sx={{ objectFit: "cover" }} />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="#D32F2F">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            ${item.price.toFixed(2)}
          </Typography>
          <Box>
            <IconButton color="primary" onClick={handleAddToCart} sx={{ mr: 1 }}>
              <AddShoppingCart />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onOpenDetails(item)}
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Ver detalles
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

