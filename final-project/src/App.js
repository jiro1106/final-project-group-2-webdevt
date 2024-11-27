import { Navbar } from './components/Navbar';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import EventHostLogin from './components/EventHostLogin';
import CreateForm from  './components/CreateForm';


function App() {

  return (
      <div className="App">
        <BrowserRouter>
        <header className="App-header">
        <Navbar /> 
        </header>
        <main>
        <Routes>
         <Route path='/user' element={<LoginForm/>}/>
         <Route path='/' element={<MenuPage/>}/>
         <Route path='/event-host' element={<EventHostLogin/>}/>
         <Route path='/CreateForm' element={<CreateForm/>}/>
        </Routes>
        </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
