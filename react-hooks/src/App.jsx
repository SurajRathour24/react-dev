import React, { useState } from 'react'

const App = () => {

  const [val, setval] = useState("Hero");

  let changeHeading = () =>{
    setval("Heading Changed By useState Hook")
  }

  return (
    <div>
      <section className="home-hero">
        <h1>{val}</h1>
        <button onClick={function(){
          changeHeading();
        }}>Click to Change</button>
      </section>
    </div>
  )
}

export default App
