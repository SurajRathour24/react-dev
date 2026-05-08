import React from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card'

const App = () => {

  let jobOpenings = [
    {
      company: "Facebook",
      job: "Frontend Developer"
    },
    {
      company: "Amazon",
      job: "Backend Developer"
    },

  ]

  console.log(jobOpenings);
  
  return (
    <div className="component-wrapper">
        <Navbar />

        <div className="card-container">
          <Card companyName="Amazon" designation="Senior FrontEnd Developer"  rate={150} />
          <Card companyName="Google" designation="Junior FrontEnd Developer"  rate={200} />
          <Card companyName="Facebook" designation="FrontEnd Developer"  rate={130} />
        </div>
    </div>
  )
}

export default App
