import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const whatsappNumber = "5519978283638";
const email = "transportesentregal7@gmail.com";
const instagramUrl = "https://www.instagram.com/l7.transportes/";

export default function App() {

  return (
    <main>

      <Header whatsappNumber={whatsappNumber} />
      
      <Hero whatsappNumber={whatsappNumber} />

      <Services whatsappNumber={whatsappNumber} />

      <About />

      <HowItWorks />

      <Footer
          whatsappNumber={whatsappNumber}
          email={email}
          instagramUrl={instagramUrl}
      />

      <FloatingButtons whatsappNumber={whatsappNumber} />
    </main>
  );
}