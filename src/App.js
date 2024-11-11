import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Discover from './components/Discover/Discover';
import React from 'react';
import Form from './components/Form/Form';
import Payment from './components/Payment/Payment';
import About from './components/About/About';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/discover' element={<Discover />} />
          <Route exact path='/Book' element={<Form/>}/>
          <Route exact path='/Pay' element={<Payment/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
