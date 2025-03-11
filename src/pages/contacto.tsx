import { Box, Typography, TextField, Button, Grid } from "@mui/material"

export default function Contacto() {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#FFFDE7" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#D32F2F", textAlign: "center", mb: 4 }}>
        Contáctanos
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <form>
            <TextField fullWidth label="Nombre" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Mensaje" margin="normal" multiline rows={4} />
            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#D32F2F" }}>
              Enviar
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Nuestra Ubicación
          </Typography>
          <Box sx={{ height: "300px", width: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52536.87035364704!2d-57.99116276644784!3d-34.92036444374645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677618294619!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

