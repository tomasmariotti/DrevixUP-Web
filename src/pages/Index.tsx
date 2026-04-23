import { useEffect } from "react";
import Nav from "@/components/landing/Nav";
import HeroSection from "@/components/landing/HeroSection";
import CinematicScroll from "@/components/landing/CinematicScroll";
import ProblemSection from "@/components/landing/ProblemSection";
import SystemSection from "@/components/landing/SystemSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import StickyCtaBar from "@/components/landing/StickyCtaBar";
import FloatingNotifications from "@/components/landing/FloatingNotifications";

const Index = () => {
  useEffect(() => {
    document.title = "DrevixUp · AI-Powered Conversion System";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "DrevixUp installs a complete AI-powered system that captures, responds, and converts leads automatically. High-converting websites, AI agents, and email automation.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <HeroSection />
        <CinematicScroll />
        <ProblemSection />
        <SystemSection />
        <BenefitsSection />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
      <StickyCtaBar />
      <FloatingNotifications />
    </div>
  );
};

export default Index;
