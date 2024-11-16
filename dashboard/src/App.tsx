import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import AboutUs from './Pages/AboutUs';
import Dashboard from './Pages/Dashboard';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/galeria' element={<Gallery />} />
        <Route path='/sobre' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
