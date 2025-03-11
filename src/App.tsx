import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MenuSection from "./components/MenuSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import { CartProvider } from "./context/CartContext"


export default function App() {
  return (
    <CartProvider>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ flex: "1 0 auto" }}>
          <Hero />
          <MenuSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    </CartProvider>
  )
}

