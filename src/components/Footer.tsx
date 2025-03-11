import { Box, Container, Typography, IconButton } from "@mui/material"
import { Facebook, Twitter, Instagram } from "@mui/icons-material"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#D32F2F", // Cambiado a rojo para mayor visibilidad
        color: "white",
        padding: "30px 0",
        marginTop: "50px",
        width: "100%", // Asegurarse de que ocupe todo el ancho
        position: "relative", // Asegurarse de que no haya problemas de posicionamiento
        zIndex: 10, // Asegurarse de que esté por encima de otros elementos
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            BFF - Burger For Friends
          </Typography>

          <Box sx={{ my: 2 }}>
            <IconButton color="inherit" size="large">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" size="large">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" size="large">
              <Instagram />
            </IconButton>
          </Box>

          <Typography variant="body1" fontWeight="bold">
            © {new Date().getFullYear()} BFF. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

