import { Navbar } from './components/Navbar';
import {TitleCard} from './components/TitleCard';
import {AccShortcut} from './components/AccShortcut';
import About from './components/About';
import {Contact} from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { Thumbnail } from './components/Thumbnail';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
         <Route path='/user' element={<LoginForm/>}/>
        </Routes>
        <header className="App-header">
        <Navbar /> 
        </header>
        <div className="container1">
          <Thumbnail/>
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
        
        </BrowserRouter>
      </div>
  );
}

export default App;
