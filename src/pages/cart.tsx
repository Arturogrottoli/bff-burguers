import type React from "react"
import { Box, Typography, Button, Container } from "@mui/material"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

const CartPage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Tu Carrito
        </Typography>
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
      </Container>
      <Footer />
    </Box>
  )
}

export default CartPage

