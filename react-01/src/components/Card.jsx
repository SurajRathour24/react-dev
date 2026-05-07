import React from 'react'

const Card = (prop) => {
  console.log(prop.name);
  return (
    
      <div className="card">
        <h2>{prop.name}</h2>
        <p>Hi All, My name is {prop.name} and my age is {prop.age}</p>
        <button>{prop.buttontext}</button>
      </div>
  )
}

export default Card
