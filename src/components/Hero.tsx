"use client"
import { Box, Typography, Button } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
    title: "Burgers For Friends",
    subtitle: "BFF - Porque las mejores hamburguesas se comparten con los mejores amigos",
  },
  {
    url: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
    title: "Papas Fritas Crujientes",
    subtitle: "El acompañamiento perfecto",
  },
  {
    url: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
    title: "Cervezas Artesanales",
    subtitle: "El maridaje ideal para tu hamburguesa",
  },
]

export default function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 64px)", // Altura total de la pantalla menos la altura del navbar
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: "calc(100vh - 64px)", // Altura total de la pantalla menos la altura del navbar
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              textAlign: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
              },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ position: "relative", zIndex: 1, fontWeight: "bold" }}
            >
              {image.title}
            </Typography>
            <Typography variant="h5" sx={{ position: "relative", zIndex: 1, mb: 4 }}>
              {image.subtitle}
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={scrollToMenu}
              sx={{
                backgroundColor: "#FFC107",
                color: "black",
                "&:hover": {
                  backgroundColor: "#FFA000",
                },
                position: "relative",
                zIndex: 1,
                padding: "10px 30px",
                fontSize: "1.1rem",
              }}
            >
              Ver Menú
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

