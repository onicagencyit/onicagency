import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import SocialReminders from "@/components/SocialReminders";
import Footer from "@/components/Footer";

const Contatti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <CTA />
        <SocialReminders />
      </div>
      <Footer />
    </div>
  );
};

export default Contatti;
