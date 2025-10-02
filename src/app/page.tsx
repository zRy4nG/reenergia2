import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RenewableEnergySection from '../components/RenewableEnergySection'
import CalculatorSection from '../components/CalculatorSection'
import FAQ from '../components/FAQ'
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <div className="animate-bounce">
      <Navbar />
      <Hero />
      <RenewableEnergySection />
      <CalculatorSection />
      <FAQ />
      <Footer />
    </div>
    </>
  );
}


