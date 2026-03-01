import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticleCarousel from "@/components/ArticleCarousel";
import Services from "@/components/Services";
import SocialReminders from "@/components/SocialReminders";
import Collaborations from "@/components/Collaborations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <ArticleCarousel />
      <Collaborations />
      <SocialReminders />
      <CTA />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
