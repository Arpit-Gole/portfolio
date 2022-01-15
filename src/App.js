import './App.scss';
import About from './Components/About';
import Achievement from './Components/Achievement';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import Qualifications from './Components/Qualification';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Qualifications />
      <Skills />
      <Achievement />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
