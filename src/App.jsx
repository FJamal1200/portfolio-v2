import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GithubProjects from "./components/GithubProjects";
import UXProjects from "./components/UXProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CrtShowcase from "./components/CrtShowcase";

import CareerCoach from "./pages/CareerCoach";
import AppTally from "./pages/AppTally";

const Home = () => {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />
        <About />
        <GithubProjects />
        <UXProjects />
        <CrtShowcase />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career-coach" element={<CareerCoach />} />
      <Route path="/apptally" element={<AppTally />} />
    </Routes>
  );
}

export default App;