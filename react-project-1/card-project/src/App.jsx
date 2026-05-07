import React from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card'

const App = () => {
  return (
    <div className="component-wrapper">
        <Navbar />

        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default App
