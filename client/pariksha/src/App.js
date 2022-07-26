import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<Register />} />
        <Route path='user-dashboard' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
