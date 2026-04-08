import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientDashboard from "@/components/ClientDashboard";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ClientDashboard />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
