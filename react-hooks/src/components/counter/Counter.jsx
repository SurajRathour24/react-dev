import React, { useState } from 'react'

const Counter = () => {

    const [num, setNum] = useState(0);


    function increaseNum(){
      console.log(num);
      
        setNum(num+1)
    }
    function decreaseNum(){
      if(num>0){
        setNum(num-1);
      }
    }
     
  return (
    <div>
      
      <div className="container mx-auto counter-wrapper flex gap-10 m-8 items-center">
            <button onClick={decreaseNum} className="cursor-pointer btn py-3 px-5 bg-amber-100">-</button>
                <h3 className="text-white text-3xl">{num}</h3>
            <button onClick={increaseNum} className="cursor-pointer btn py-3 px-5 bg-amber-100">+</button>
      </div>
    </div>
  )
}

export default Counter
