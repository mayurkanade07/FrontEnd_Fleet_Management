import './App.css';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'

import Header from './Components/Layouts/Header/Header';
import Home from './Components/Pages/Home'
import CancelBooking from './Components/Pages/Cancel_Booking'
import Footer from './Components/Layouts/Footer/Footer';
import Vehicle_Selection from './Components/Pages/Vehicle_Selection';
import Addon from './Components/Pages/Addon';
import LocationSelector from './Components/Pages/LocationSelector/LocationSelector'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Modify' element={<CancelBooking />}/>
          <Route path='/Addon' element={<Addon />}/>
          <Route path='/LocationSelector' element={<LocationSelector />}/>
          LocationSelector
        </Routes>
        <Outlet/>
      </BrowserRouter>
      
      <Footer/>

    </div>
  );
}

export default App;
