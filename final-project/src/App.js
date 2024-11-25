import { Navbar } from './components/Navbar';
import {TitleCard} from './components/TitleCard';
import {AccShortcut} from './components/AccShortcut';
import About from './components/About';
import './App.css';
import homepage from './assets/homepage.png';
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
          
        </div>
        
        </BrowserRouter>
      </div>
  );
}

export default App;
