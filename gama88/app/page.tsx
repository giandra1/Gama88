import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Pillars from "@/components/Pillars";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FacilityTour from "@/components/FacilityTour";
import Promo from "@/components/Promo";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Pillars />
      <Pricing />
      <Testimonials />
      <FacilityTour />
      <Promo />
      <RegisterForm />
      <Footer />
    </main>
  );
}
