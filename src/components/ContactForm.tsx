import type React from "react"
import { Box, TextField, Button, Grid, Typography, Paper, Container } from "@mui/material"
import { Send, Phone, Email, LocationOn } from "@mui/icons-material"

const ContactForm: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5", mt: 4 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Contáctanos
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Envíanos un mensaje
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Nombre" variant="outlined" required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Apellido" variant="outlined" required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Email" variant="outlined" type="email" required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Teléfono" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Mensaje" variant="outlined" multiline rows={4} required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" size="large" startIcon={<Send />}>
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Información de Contacto
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn sx={{ mr: 2, color: "primary.main" }} />
                  <Typography variant="body1">123 Calle Hamburguesa, Ciudad Foodie</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone sx={{ mr: 2, color: "primary.main" }} />
                  <Typography variant="body1">+1 234 567 890</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                  <Email sx={{ mr: 2, color: "primary.main" }} />
                  <Typography variant="body1">info@burgerforfriends.com</Typography>
                </Box>
              </Box>

              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Horario de Atención
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Lunes a Viernes: 11:00 AM - 10:00 PM
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Sábados y Domingos: 12:00 PM - 11:00 PM
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactForm

