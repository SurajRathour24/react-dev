import React from 'react'

const Hero = () => {
  let getUserData = (e) =>{
    console.log(e.target.value);
    // console.log("User is typing");
    
  }
  function btnClicked(x, y){
    // console.log("Button Clicked");
    let para = document.querySelector("p");
              para.style.color = "red";
              console.log("BTN Clicked");
              console.log(x, y);
               
  }
  let mouseMove = (val) =>{
    // console.log(val);
  }
  let onPageScroll = (val) =>{
    let heading = document.querySelector("h1");
    if(val > 400){
      heading.style.color = "pink";
      console.log(val);
      
    }
    else{
      console.log("value is less than 0");
    }
  }
  return (
    <div>
      <div className="main-body" onWheel={function(elems){
        onPageScroll(elems.deltaY);
      }}>
      <section onMouseMove={(elem) => {
        mouseMove(elem.clientX, elem.clientY)
      }} class="hero h-[70vh] flex justify-center items-center bg-amber-100">
        <div className="container mx-auto">
          <div className="banner-content-wrapper flex justify-between items-center gap-10">
            <div className="left-banner-content">
            <h1 className="text-6xl font-bold">
              Create Modern Websites That
              <span> Impress Clients</span>
            </h1>
            <p className="w-3xl mt-6">I'll go with "Pixora Studio" but let me know if you'd like a different one and I can swap it instantly. Now let me build your full portfolio. This will take a moment it's going to be comprehensive</p>
            <span><input onChange={getUserData} type="text" placeholder="Enter your email..." className="border-2 px-3 py-4 me-5" /></span>
            <button className="mt-5 px-8 py-4 bg-amber-900 text-white cursor-pointer" onClick={function(e){
              btnClicked(e.target);
            }}>Get a Quote</button>
            </div>
            <div className="right-banner-img">
                <img className="rounded-2xl w-6xl" src="https://images.pexels.com/photos/36405831/pexels-photo-36405831.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Hero
