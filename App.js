import './App.css';
import Header from './Header/header';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
