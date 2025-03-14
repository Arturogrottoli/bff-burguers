import type { AppProps } from "next/app"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CartProvider } from "../context/CartContext"
import "../styles/globals.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#D32F2F",
    },
    secondary: {
      main: "#FFC107",
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp

