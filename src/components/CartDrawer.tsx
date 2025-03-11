"use client"

import React, { useState } from "react"
import {
  Drawer,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material"
import { Delete, ShoppingBag } from "@mui/icons-material"
import { useCart } from "../context/CartContext"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { items, removeFromCart, getTotalItems, getTotalPrice, clearCart } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: false,
    address: false,
    phone: false,
    email: false,
  })

  const handleViewMenu = () => {
    onClose()
    setTimeout(() => {
      const menuSection = document.getElementById("menu")
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleCheckout = () => {
    setIsCheckoutOpen(true)
  }

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false)
    setFormData({ name: "", address: "", phone: "", email: "" })
    setFormErrors({ name: false, address: false, phone: false, email: false })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    setFormErrors({ ...formErrors, [name]: false })
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      address: formData.address.trim() === "",
      phone: formData.phone.trim() === "",
      email: formData.email.trim() === "" || !formData.email.includes("@"),
    }
    setFormErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleConfirmOrder = () => {
    if (validateForm()) {
      setIsCheckoutOpen(false)
      setIsConfirmationOpen(true)
    }
  }

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false)
    clearCart()
    onClose()
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { width: { xs: "100%", sm: 400 } },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="#D32F2F">
            Tu Carrito
          </Typography>

          {getTotalItems() === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <ShoppingBag sx={{ fontSize: 60, color: "#ccc" }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Tu carrito está vacío
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Agrega algunas hamburguesas deliciosas para comenzar tu pedido.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleViewMenu}
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "8px 20px",
                }}
              >
                Ver el menú
              </Button>
            </Box>
          ) : (
            <>
              <List sx={{ mb: 2 }}>
                {items.map((item) => (
                  <React.Fragment key={item.id}>
                    <ListItem
                      alignItems="flex-start"
                      secondaryAction={
                        <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                          <Delete />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt={item.name}
                          src={item.image}
                          variant="rounded"
                          sx={{ width: 60, height: 60, mr: 2 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight="bold">
                            {item.name}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography variant="body2" component="span" color="text.secondary">
                              Cantidad: {item.quantity}
                            </Typography>
                            <br />
                            <Typography variant="body2" component="span" color="text.primary" fontWeight="bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>

              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body1">Subtotal:</Typography>
                  <Typography variant="body1">${getTotalPrice().toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body1">Impuestos:</Typography>
                  <Typography variant="body1">${(getTotalPrice() * 0.1).toFixed(2)}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" fontWeight="bold">
                    Total:
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color="#D32F2F">
                    ${(getTotalPrice() * 1.1).toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={handleCheckout}
                sx={{
                  borderRadius: "30px",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "1rem",
                }}
              >
                Proceder al pago
              </Button>
            </>
          )}
        </Box>
      </Drawer>

      <Dialog open={isCheckoutOpen} onClose={handleCloseCheckout}>
        <DialogTitle>Datos de envío</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Nombre completo"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
            error={formErrors.name}
            helperText={formErrors.name ? "Este campo es obligatorio" : ""}
            required
          />
          <TextField
            margin="dense"
            id="address"
            name="address"
            label="Dirección"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.address}
            onChange={handleInputChange}
            error={formErrors.address}
            helperText={formErrors.address ? "Este campo es obligatorio" : ""}
            required
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Teléfono"
            type="tel"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleInputChange}
            error={formErrors.phone}
            helperText={formErrors.phone ? "Este campo es obligatorio" : ""}
            required
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            error={formErrors.email}
            helperText={formErrors.email ? "Ingrese un email válido" : ""}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCheckout}>Cancelar</Button>
          <Button onClick={handleConfirmOrder} variant="contained" color="primary">
            Confirmar pedido
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation} maxWidth="sm" fullWidth>
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              ¡Pedido Confirmado!
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Gracias por tu compra
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <img
              src="https://img.icons8.com/color/96/000000/hamburger.png"
              alt="Burger icon"
              style={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography variant="body1" paragraph>
            Te enviaremos un correo electrónico a <strong>{formData.email}</strong> cuando tu pedido esté en camino.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            No olvides revisar tu carpeta de spam si no recibes nuestro correo.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button
            onClick={handleCloseConfirmation}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 30px",
            }}
          >
            Volver al Menú
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CartDrawer

