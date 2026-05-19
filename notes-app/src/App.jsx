import React, { useState } from 'react'

const App = () => {

  const [notesHeading, setnotesHeading] = useState("")
  const [details, setDetails] = useState("");

  const [task, settask] = useState([]);

  let submitControl = (e) =>{
    e.preventDefault();

    let taskClone = ([...task]);
    
    taskClone.push({notesHeading, details})

    settask(taskClone);
   

  
    

    console.log();
    
    setnotesHeading("")
    setDetails("")

  }
  return (
    <div>
      
    <form onSubmit={(e) => {
      submitControl(e)
    }} className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8 space-y-6">

  {/* Heading */}
  <div>
    <h2 className="text-center text-3xl font-bold text-gray-800">
      Create New Note ✨
    </h2>
    <p className="text-gray-500 text-center mt-2">
      Organize your thoughts beautifully.
    </p>
  </div>

  {/* Title Input */}
  <div className="space-y-2">
    <label className="text-sm font-semibold text-gray-700">
      Note Title
    </label>

    <input
      onChange={(e) =>{
        setnotesHeading(e.target.value);
      }}
      type="text"
      placeholder="Enter Title"
      value={notesHeading}
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        border
        border-gray-300
        bg-gray-50
        text-gray-800
        placeholder:text-gray-400
        outline-none
        transition-all
        duration-300
        focus:border-indigo-500
        focus:ring-4
        focus:ring-indigo-200
      "
    />
  </div>

  {/* Description */}
  <div className="space-y-2">
    <label className="text-sm font-semibold text-gray-700">
      Description
    </label>

    <textarea
      onChange={(e)=>{
        setDetails(e.target.value)
      }}
      name="textarea"
      id="textarea"
      rows="6"
      placeholder="Write your note description..."
      value={details}
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        border
        border-gray-300
        bg-gray-50
        text-gray-800
        placeholder:text-gray-400
        outline-none
        resize-none
        transition-all
        duration-300
        focus:border-indigo-500
        focus:ring-4
        focus:ring-indigo-200
      "
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="
      w-full
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-indigo-600
      to-purple-600
      text-white
      font-semibold
      text-lg
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-2xl
      active:scale-[0.98]
    cursor-pointer
    "
  >
    Add Note 🚀
  </button>

</form>

<section id="my-notes" className="m-10">
  <div className="flex gap-8 wrap-normal">
{task.map(function(item){

    return <div className="p-5 text-center my-note bg-white h-[300px] w-[300px] rounded">
      <h2 className="text-2xl font-bold mb-2">{item.notesHeading}</h2>
      <p className="text-lg">{item.details}</p>
      <button className="py-3
      rounded-2xl
      bg-gradient-to-r
      from-indigo-600
      to-purple-600
      text-white
      font-semibold
      text-lg
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-2xl
      active:scale-[0.98]
    cursor-pointer px-5 mt-4">Delete Note</button>
  </div>
  })}
  </div>
  
  
</section>
    </div>
  )
}

export default App
