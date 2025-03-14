import type React from "react"
import { Box, Typography, Button, Container } from "@mui/material"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import { useCart } from "../context/CartContext"

const CartPage: React.FC = () => {
  const { items, getTotalItems } = useCart()

  return (
    <Box>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Tu Carrito
        </Typography>
        {getTotalItems() === 0 ? (
          <>
            <Typography variant="body1" paragraph align="center">
              No hay pedidos asignados todavía.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Link href="/" passHref>
                <Button variant="contained" color="primary" component="a">
                  Volver al Menú
                </Button>
              </Link>
            </Box>
          </>
        ) : (
          <Typography variant="body1" paragraph align="center">
            Tienes {getTotalItems()} productos en tu carrito.
          </Typography>
        )}
      </Container>
      <Footer />
    </Box>
  )
}

export default CartPage

