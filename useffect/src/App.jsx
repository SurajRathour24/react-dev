import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const App = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  let getData = async () => {
    let response = await axios.get(
      "https://picsum.photos/v2/list?page=1&limit=5",
    );
    let data = response.data;
    // console.log(data);
    setUserProfiles(data);
  };

  useEffect(function () {
    getData();
  }, []);

  let printUserData = "No User Avail...";

  //  const [printUserData, setPrintUserData] = useState("No User Avail...")

  if (userProfiles.length > 0) {
    printUserData = userProfiles.map(function (user, idx) {
      return (
        <div key={idx}>
          <a href={user.url} target="_blank">
            <img
              className="rounded-2xl"
              width="500px"
              src={user.download_url}
              alt="image"
            />
          </a>
        </div>
      );
      // console.log("Running");
    });
  }

  let getNextData = async () =>{
    let response = await axios.get("https://picsum.photos/v2/list?page=2&limit=5");
    let data = response.data;
    setUserProfiles(data);
  }

  let getPrevData = async () =>{
    let response = await axios.get("https://picsum.photos/v2/list?page=1&limit=5");
    let data = response.data
    setUserProfiles(data);
  }

  return (
    <div className="h-screen bg-black text-center">
      {/* <button
      onClick={() => {
        getData()
      }}
      className="bg-green-600 px-8 py-4 rounded m-4 active:scale-110">Get data</button> */}

      <div className="userData">
        <div className="text-white text-2xl flex justify-center align-middle flex-wrap gap-4">
          {printUserData}
        </div>
        <div className="pagination-btn flex justify-center align-middle items-center gap-3 mt-6">
          <button
            onClick={() => {
              getPrevData();
            }}
            className="px-8 py-5 bg-orange-500 flex gap-3 font-medium text-white cursor-pointer active:bg-amber-800 active:scale-100"
          >
            <ArrowLeft /> Previous
          </button>
          <button
            onClick={() => {
              getNextData();
            }}
            className="px-8 py-5 bg-orange-500 flex gap-3 font-medium text-white cursor-pointer active:bg-amber-800 active:scale-100"
          >
            Next <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
