import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import EventHostLogin from './components/EventHostLogin';
import CreateForm from  './components/CreateForm';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <div className="App">
        <BrowserRouter>
        <main>
        <Routes>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/user' element={<LoginForm/>}/>
         <Route path='/' element={<MenuPage/>}/>
         <Route path='/event-host' element={<EventHostLogin/>}/>
         <Route path='/CreateForm' element={<CreateForm/>}/>
         <Route
          path="/admin"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/admin" />}
        />
        <Route
          path="/events"
          element={isLoggedIn ? <EventManagement /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={isLoggedIn ? <UserManagement /> : <Navigate to="/" />}
        />
        </Routes>
        </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
