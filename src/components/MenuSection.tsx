"use client"

import { useState } from "react"
import { Grid, Box, Typography, Container, Divider } from "@mui/material"
import ItemCard from "./BurgerCard"
import ItemDetailModal from "./ItemDetailModal"

const burgers = [
  {
    id: 1,
    name: "Classic BFF",
    description:
      "La hamburguesa clásica con queso cheddar, lechuga fresca, tomate jugoso y nuestra salsa especial BFF.",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 2,
    name: "Veggie Amiga",
    description:
      "Nuestra opción vegetariana con una jugosa hamburguesa de garbanzos y remolacha, topped con aguacate y rúcula.",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 3,
    name: "Doble Amistad",
    description:
      "Para los más hambrientos: doble carne, doble queso, doble bacon. Acompañada de aros de cebolla crujientes.",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 4,
    name: "Picante Pasión",
    description:
      "Para los amantes del picante: carne a la parrilla, jalapeños, queso pepper jack, guacamole y salsa sriracha.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 5,
    name: "BBQ Bonanza",
    description:
      "Hamburguesa con carne ahumada, queso cheddar, bacon crujiente, aros de cebolla y abundante salsa BBQ casera.",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 6,
    name: "Mediterránea",
    description:
      "Inspirada en sabores mediterráneos: carne de cordero, queso feta, tomate, cebolla roja, pepino y salsa tzatziki.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
]

const sides = [
  {
    id: 101,
    name: "Papas Fritas",
    description: "Crujientes papas fritas, perfectamente sazonadas con sal y un toque de pimienta.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 102,
    name: "Aros de Cebolla",
    description: "Deliciosos aros de cebolla dorados y crujientes, servidos con nuestra salsa especial.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 103,
    name: "Nachos",
    description: "Crujientes nachos de maíz con queso fundido, guacamole, pico de gallo y crema agria.",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
  },
]

const drinks = [
  {
    id: 201,
    name: "Agua Mineral",
    description: "Agua mineral natural, sin gas.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1616118132534-381148898bb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 202,
    name: "Soda",
    description: "Refrescante soda con gas.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 203,
    name: "Cerveza Rubia",
    description: "Cerveza artesanal rubia, suave y refrescante.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 204,
    name: "Cerveza IPA",
    description: "Cerveza artesanal IPA, con notas cítricas y un toque amargo.",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 205,
    name: "Gaseosa Cola",
    description: "Clásica gaseosa sabor cola.",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 206,
    name: "Gaseosa Limón",
    description: "Refrescante gaseosa sabor limón.",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
  },
]

export default function MenuSection() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null)

  const handleOpenDetails = (item: any) => {
    setSelectedItem(item)
  }

  const handleCloseDetails = () => {
    setSelectedItem(null)
  }

  const renderItems = (items: any[]) => {
    return items.map((item) => (
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <ItemCard item={item} onOpenDetails={handleOpenDetails} />
      </Grid>
    ))
  }

  return (
    <Box id="menu" sx={{ padding: "60px 0" }}>
      <Container>
        <Typography variant="h3" gutterBottom align="center" fontWeight="bold" color="#D32F2F">
          Nuestro Menú
        </Typography>

        <Typography variant="h4" gutterBottom align="left" fontWeight="bold" color="#D32F2F" sx={{ mt: 6, mb: 3 }}>
          Hamburguesas
        </Typography>
        <Grid container spacing={4}>
          {renderItems(burgers)}
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" gutterBottom align="left" fontWeight="bold" color="#D32F2F" sx={{ mb: 3 }}>
          Acompañamientos
        </Typography>
        <Grid container spacing={4}>
          {renderItems(sides)}
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" gutterBottom align="left" fontWeight="bold" color="#D32F2F" sx={{ mb: 3 }}>
          Bebidas
        </Typography>
        <Grid container spacing={4}>
          {renderItems(drinks)}
        </Grid>

        <ItemDetailModal item={selectedItem} open={!!selectedItem} onClose={handleCloseDetails} />
      </Container>
    </Box>
  )
}

