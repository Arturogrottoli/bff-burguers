import { Box, Typography } from "@mui/material"
import Navbar from "../components/Navbar"
import MenuSection from "../components/MenuSection"

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <Typography variant="h3" gutterBottom align="center">
          Nuestro Menú
        </Typography>
        <MenuSection />
      </Box>
    </>
  )
}

