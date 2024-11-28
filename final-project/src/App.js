import { Navbar } from './components/Navbar';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import EventHostLogin from './components/EventHostLogin';
import CreateForm from  './components/CreateForm';
import EventHostMenu from './functions_components/EventHostMenu';
import AddEvent from './functions_components/EventHostAddEvent';
import ManageEvent from './functions_components/EventHostManageEvents';

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
          {/*Nested routes*/}
          <Route path='/event-host-menu' element={<EventHostMenu/>}/>
          {/*Nested routes*/}
            <Route path='/addEvent' element={<AddEvent/>}/>
            <Route path='/manageEvent' element={<ManageEvent/>}/>
        </Routes>
        </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
