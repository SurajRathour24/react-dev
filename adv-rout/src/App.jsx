import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className="main-elems-wrapper h-screen flex ">
        <Navbar />
        <Footer />
      </div>
    </div>
  )
}

export default App
