import { Navbar } from './components/Navbar';
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
      </div>
  );
}

export default App;
