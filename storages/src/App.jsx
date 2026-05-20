import axios from 'axios';
import React, { use, useState } from 'react'

const App = () => {

  const [data, setdata] = useState([]);

   let getData = async () =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json();
    console.log(data);
  } 

  let showUsers  = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(response.data);

    let users = response.data;
    console.log(users);
    
    setdata(users)
    
    
  }


  

  return (
    <div>
      <h1>API</h1>
      <button onClick={() =>{
        getData()
      }}>Call API</button>

      <button onClick={() =>{
        showUsers()
      }}>Show Users</button>

      <div className="user">
        {data.map(function(elems, idx){
          return <div key={idx}>
            <h1>{elems.name}</h1>
            <h3>{elems.website}</h3>
            <h5>{elems.address.city}</h5>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
