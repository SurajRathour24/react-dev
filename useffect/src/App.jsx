import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userProfiles, setUserProfiles] = useState([]);

  let getData = async () =>{
   let response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
   let data = response.data 
  //  console.log(data);
   setUserProfiles(data)
  }


  let printUserData = "No User Avail..."

//  const [printUserData, setPrintUserData] = useState("No User Avail...")


  if(userProfiles.length > 0){
    printUserData = userProfiles.map(function(user, idx){
      return <div key={idx}>
        <img width="500px" src={user.download_url} alt="image" />
      </div>
      // console.log("Running");
      
    });
  }

  return (
    <div className="h-full bg-black text-center">
      <button
      onClick={() => {
        getData()
      }}
      className="bg-green-600 px-8 py-4 rounded m-4 active:scale-110">Get data</button>

      <div className="userData">
       <h1 className="text-white text-2xl flex justify-center align-middle flex-wrap gap-4">{printUserData}</h1>
      </div>
    </div>
  )
}

export default App