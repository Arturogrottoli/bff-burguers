"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"
import { Send, Person, Email, Phone, Message, LocationOn, AccessTime } from "@mui/icons-material"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  })
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    setFormErrors({ ...formErrors, [name]: false })
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "" || !formData.email.includes("@"),
      message: formData.message.trim() === "",
    }
    setFormErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (validateForm()) {
      // Aquí iría la lógica para enviar el mensaje
      console.log("Mensaje enviado:", formData)
      // Abrir el modal de confirmación
      setIsConfirmationOpen(true)
      // Resetear el formulario
      setFormData({ name: "", email: "", message: "" })
    }
  }

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false)
  }

  return (
    <Box
      id="contact"
      sx={{
        padding: "80px 0",
        backgroundColor: "#f8f8f8",
        backgroundImage: "linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)",
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold" color="#D32F2F" sx={{ mb: 5 }}>
          Contáctanos
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              sx={{
                p: 4,
                borderRadius: "15px",
                background: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h5" gutterBottom fontWeight="bold" color="#D32F2F">
                Envíanos un mensaje
              </Typography>
              <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  margin="normal"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={formErrors.name}
                  helperText={formErrors.name ? "Este campo es obligatorio" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={formErrors.email}
                  helperText={formErrors.email ? "Ingrese un email válido" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Mensaje"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={formErrors.message}
                  helperText={formErrors.message ? "Este campo es obligatorio" : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Message color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Send />}
                  type="submit"
                  sx={{
                    mt: 2,
                    borderRadius: "30px",
                    padding: "12px 30px",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Enviar Mensaje
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              sx={{
                p: 4,
                borderRadius: "15px",
                height: "100%",
                background: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h5" gutterBottom fontWeight="bold" color="#D32F2F">
                Nuestra Ubicación
              </Typography>

              <Box sx={{ mt: 4, height: "300px", width: "100%", mb: 4 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52536.87035364704!2d-57.99116276644784!3d-34.92036444374645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677618294619!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocationOn sx={{ fontSize: 30, mr: 2, color: "#D32F2F" }} />
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Dirección
                    </Typography>
                    <Typography variant="body1">123 Calle Hamburguesa, Ciudad Foodie</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Phone sx={{ fontSize: 30, mr: 2, color: "#D32F2F" }} />
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Teléfono
                    </Typography>
                    <Typography variant="body1">+1 234 567 890</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <AccessTime sx={{ fontSize: 30, mr: 2, color: "#D32F2F" }} />
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Horario de Atención
                    </Typography>
                    <Typography variant="body1">Lunes a Viernes: 11:00 AM - 10:00 PM</Typography>
                    <Typography variant="body1">Sábados y Domingos: 12:00 PM - 11:00 PM</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation}>
        <DialogTitle>Mensaje Enviado</DialogTitle>
        <DialogContent>
          <Typography>Gracias por contactarnos. Contestaremos su consulta a la brevedad.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ContactSection

