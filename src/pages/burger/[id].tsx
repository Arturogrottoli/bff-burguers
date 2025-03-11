"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import { Box, Typography, Button, TextField, Card, CardMedia } from "@mui/material"
import Navbar from "../../components/Navbar"

// Este es un mock de datos. En una aplicación real, obtendrías estos datos de una API o base de datos.
const burgers = [
  {
    id: 1,
    name: "Classic BFF",
    description:
      "La hamburguesa clásica con queso cheddar, lechuga fresca, tomate jugoso y nuestra salsa especial BFF. Todo esto en un pan brioche recién horneado.",
    price: 10.99,
    image: "/placeholder.svg?height=400&width=600&text=Classic+BFF",
  },
  {
    id: 2,
    name: "Veggie Amiga",
    description:
      "Nuestra opción vegetariana con una jugosa hamburguesa de garbanzos y remolacha, topped con aguacate, rúcula y mayonesa de chipotle vegana.",
    price: 11.99,
    image: "/placeholder.svg?height=400&width=600&text=Veggie+Amiga",
  },
  {
    id: 3,
    name: "Doble Amistad",
    description:
      "Para los más hambrientos: doble carne, doble queso, doble bacon. Acompañada de aros de cebolla crujientes y salsa BBQ.",
    price: 13.99,
    image: "/placeholder.svg?height=400&width=600&text=Doble+Amistad",
  },
  // ... añade el resto de las hamburguesas aquí
]

export default function BurgerDetail() {
  const router = useRouter()
  const { id } = router.query
  const [quantity, setQuantity] = useState(1)

  const burger = burgers.find((b) => b.id === Number(id))

  if (!burger) {
    return <div>Cargando...</div>
  }

  const handleAddToCart = () => {
    // Aquí iría la lógica para añadir al carrito
    console.log(`Añadido al carrito: ${quantity} ${burger.name}`)
    // Podrías mostrar un mensaje de éxito, actualizar el estado del carrito, etc.
  }

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 800, margin: "auto", padding: 2 }}>
        <Card>
          <CardMedia component="img" height="400" image={burger.image} alt={burger.name} />
          <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
              {burger.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {burger.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Precio: ${burger.price.toFixed(2)}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
              <TextField
                type="number"
                label="Cantidad"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 0))}
                inputProps={{ min: 1 }}
                sx={{ width: 100, marginRight: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleAddToCart}
                sx={{
                  backgroundColor: "#D32F2F",
                  "&:hover": {
                    backgroundColor: "#9A0007",
                  },
                }}
              >
                Agregar al carrito
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  )
}

