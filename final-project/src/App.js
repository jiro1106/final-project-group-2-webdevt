import { Navbar } from './components/Navbar';
import {TitleCard} from './components/TitleCard';
import {AccShortcut} from './components/AccShortcut';
import About from './components/About';
import {Contact} from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import homepage from './assets/homepage.png';

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container1">
          <img src={homepage} alt='' className='background1'/>
            <div className="source-button">
            <button className='button-59'>Services Provided</button>
            </div>
        </div>
        <div className="container2">
          <TitleCard />
          <AccShortcut />
        </div>
        <div className="container3">
          <About />
        </div>
        <div className="container4">
          <Contact />
        </div>
        <div className="container5">
          <Footer />
        </div>
      </div>
  );
}

export default App;
