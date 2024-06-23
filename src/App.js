import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/footer/Newsletter";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Services />
      <ContactUs />
      <Footer>
        <Newsletter />
        <div className="contact">
          owiveoinvwe oewinvoewinvoweniv weovienwoivnoevw
        </div>
      </Footer>
    </>
  );
}
