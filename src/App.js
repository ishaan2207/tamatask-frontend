// deps
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
