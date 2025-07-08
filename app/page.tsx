// app/page.tsx
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
