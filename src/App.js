import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Header from './Components/Layouts/Header/Header';
import Home from './Components/Pages/Home'
import CancelBooking from './Components/Pages/Cancel_Booking'
import Footer from './Components/Layouts/Footer/Footer';
import Vehicle_Selection from './Components/Pages/Vehicle_Selection';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Modify' element={<CancelBooking />}>Home</Route>
        </Routes>
      </BrowserRouter>
      <Vehicle_Selection/>
      <Footer/>

    </div>
  );
}

export default App;
