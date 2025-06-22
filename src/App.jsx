import Navbar from "./components/ui/Navbar";
import LandingSection from "./components/ui/LandingSection";
import FeaturesSection from "./components/ui/FeaturesSection";



function App() {
  return (
    <div className="w-full min-h-screen text-gray-900">
      {/* Navbar */}
      <Navbar />
      
      {/* Sections */}
      <LandingSection/>

      <section id="features" className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4">
        <FeaturesSection />
      </section>

      <section id="about" className="h-screen bg-white flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="text-lg mt-2">Learn more about GECO, our mission, and our team</p>
        </div>
      </section>
    </div>
  );
}

export default App
