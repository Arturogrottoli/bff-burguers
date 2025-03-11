import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MenuSection from "../components/MenuSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer" // Asegurarse de que la importación sea correcta

export default function HomePage() {
  // Asegurarse de que la página tenga suficiente altura para mostrar todo el contenido
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

