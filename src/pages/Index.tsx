import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Navigate to catalog when searching
    const catalogSection = document.getElementById("catalogo");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <FeaturedSection />
        <CatalogSection searchQuery={searchQuery} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
