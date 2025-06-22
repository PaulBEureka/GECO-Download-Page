import Navbar from "./components/ui/Navbar";
import LandingSection from "./components/ui/LandingSection";
import FeaturesSection from "./components/ui/FeaturesSection";
import SystemRequirements from "./components/ui/SystemRequirements";
import Troubleshooting from "./components/ui/Troubleshooting";



function App() {
  return (
    <div className="w-full min-h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Sections */}
      <LandingSection/>

      <section id="features" className="min-h-screen bg-yellow-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100 flex flex-col items-center py-16 px-4">
        <FeaturesSection />
      </section>

      <section id="about" className="h-screen bg-white dark:bg-gray-900 flex justify-center items-center">
        <SystemRequirements />
      </section>
      <section id="troubleshooting" className="h-screen bg-yellow-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100 flex justify-center items-center">
        <Troubleshooting />
      </section>
    </div>
  );
}

export default App
