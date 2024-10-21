import './App.css';
import Navbar from './components/Navbar';
import AbstractBackground from './components/AbstractBackground';
import HeroSection from './pages/HeroSection';
import Hiw from './pages/HIW.jsx';
import Service from './pages/Service.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
function App() {
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}> {/* Ensure the div has relative positioning and minimum height */}
      <AbstractBackground />
      <Navbar />
      <HeroSection/>
      <Hiw/>
      <Service/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
