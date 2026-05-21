import React, { useState } from 'react'
import Cards from './components/cards/Cards';
import Counter from './components/counter/Counter';

const App = () => {

  

  const [val, setval] = useState("Hey");

  let changeHeading = () =>{
    setval("Heading Changed By useState Hook")
  }


  
  // let sectionCard = document.querySelector(".card");

  const [showCard, setShowCard] = useState(false)

  let showCards = (elems) =>{
    if(elems > 450){
      setShowCard(true)
    }
  }

      const [user, setUser] = useState({
      Name : "Suraj",
      Designation: "Frontend Developer"
    })

    let changeUser = () =>{
      // let userCopy = {...user};
      // userCopy.Name = "Harsh"
      // console.log(user);
      // setUser(userCopy);
      // console.log(user);

      // Method 2 

      setUser(prev=>({...prev, Name:"ABC" }))
    }


  return (
    <div>
      <section onMouseMove={function(elems){
        showCards(elems.clientY)
      }} id="section-hero" className="h-150 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 text-center">
  
  <h1 onClick={function(){
changeUser()
  }} className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
    {user.Name} {val} 
  </h1>

  <button
    onClick={function () {
      changeHeading();
    }}
    className="mt-8 px-8 py-4 rounded-2xl bg-white text-slate-900 font-semibold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-indigo-500 hover:text-white transition-all duration-300"
  >
    Click to Change
  </button>

  <Counter />

</section>

 {showCard && (
        <section className="card p-10">
          <Cards />
        </section>
      )}
    </div>
  )
}

export default App
