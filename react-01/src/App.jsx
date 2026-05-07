import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
      <div className="parent container">
        <Navbar/>
          <div className="card-wrapper flexbox">
            <Card/>
            <Card/>
            <Card/>
          </div>
      </div>
    </>
  )
}

export default App
