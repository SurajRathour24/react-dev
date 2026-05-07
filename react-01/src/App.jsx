import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
      <div className="parent container">
        <Navbar/>
          <div className="card-wrapper flexbox">
            <Card name="Harsh" age={18} buttontext="About Harsh" />
            <Card name="Vinayak" age={22} buttontext="About Vinayak" />
            <Card name="Ritvik" age={25} buttontext="About Ritvik" />
          </div>
      </div>
    </>
  )
}

export default App
