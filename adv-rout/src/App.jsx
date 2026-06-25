import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blogs';               
import Services from './pages/Services';               
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>

   


      <div className="main-elems-wrapper h-screen flex items-center justify-between flex-col">
        <Navbar />
          <Routes>
    <Route path='/' element={< Home />} />
    <Route path='/about-us' element={< About />} />
    <Route path='/services' element={< Services />} />
    <Route path='/blog' element={< Blog />} />
    <Route path='/contact-us' element={< Contact />} />
    <Route path='/book-new' element={< book />} />
    <Route path='*' element={ < NotFound /> } />
    </Routes>

        <Footer />
      </div>
    </div>
  )
}


window.addEventListener('load', function () {
    const loader = document.getElementById('tl-loader');

    setTimeout(() => {
        loader.classList.add('tl-hide');

        setTimeout(() => {
            loader.remove();
        }, 500);

    }, 500); // Optional delay
});

export default App
