import "./App.css";
import HeroSection from "./components/WebsiteComponents/HeroSection/heroSection";
import AltNavBar from "./components/WebsiteComponents/NavBar/altNavBar";

export default function App() {
  return (
    <div className="App bg-gray-900">
      <AltNavBar />
      <HeroSection />
    </div>
  );
}
