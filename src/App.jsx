import DownloadButton from "./components/ui/DownloadButton";
import Navbar from "./components/ui/Navbar";



function App() {
  return (
    <div className="w-full min-h-screen text-gray-900">
      {/* Navbar */}
      <Navbar />
      
      {/* Sections */}
      <section id="download" className="h-screen bg-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to GECO</h1>
          <p className="text-lg mt-2">Your LLM-based compnaion application to help adapt sustainable habits</p>
          <div className="flex justify-center items-center mt-3">
            <DownloadButton className="mt-4">Download Now</DownloadButton>
          </div>
        </div>
      </section>

      <section id="features" className="h-screen bg-black text-white flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Features</h2>
          <p className="text-lg mt-2">Discover what makes GECO special</p>
        </div>
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
