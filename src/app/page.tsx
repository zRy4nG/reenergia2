import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RenewableEnergySection from '../components/RenewableEnergySection'
import CalculatorSection from '../components/CalculatorSection'
import FAQ from '../components/FAQ'
import Footer from "../components/Footer";
import FeedbackButton from "../components/FeedbackButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RenewableEnergySection />
      <CalculatorSection />
      <FAQ />
      <Footer />
      <FeedbackButton />
    </>
  );
}