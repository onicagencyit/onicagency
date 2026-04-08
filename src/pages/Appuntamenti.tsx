import Navbar from "@/components/Navbar";
import AppointmentCalendar from "@/components/AppointmentCalendar";
import Footer from "@/components/Footer";

const Appuntamenti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <AppointmentCalendar />
      </div>
      <Footer />
    </div>
  );
};

export default Appuntamenti;
