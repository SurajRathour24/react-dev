import React, { useState } from 'react'

const Forms = () => {

  const [name, setName] = useState("");
  let setUser = (val) =>{
    setName(val);
  }

  let preventSubmit = (e) =>{
    e.preventDefault();
    console.log("Submitted by ", name);
    setName("");

  }
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-2 ">
      <h1 className="text-white mb-3 text-2xl font-bold uppercase">Hey {name}</h1>

      <form onSubmit={(e) =>{
        preventSubmit(e);
      }} action="#">
        <input onChange={function(e){
          setUser(e.target.value) 
        }} value={name} type="text" className="text-white border-amber-50 border-2 px-3 py-3" placeholder="Your Name..." />
        <input type="submit" value="Submit Now" className="text-white px-6 ms-3 bg-amber-800 py-3" />
      </form>
    </div>
  )
}

export default Forms
