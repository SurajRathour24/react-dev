import React from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card'

const App = () => {
  
  const jobInfo = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Remote",
    salary: "₹6 LPA - ₹10 LPA",
    experience: "2+ Years",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    type: "Full Time",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "PixelCraft Studio",
    location: "Chandigarh",
    salary: "₹4 LPA - ₹7 LPA",
    experience: "1+ Years",
    skills: ["Figma", "Adobe XD", "Wireframing"],
    type: "Full Time",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "CodeSphere Pvt Ltd",
    location: "Bangalore",
    salary: "₹8 LPA - ₹14 LPA",
    experience: "3+ Years",
    skills: ["Node.js", "Express", "MongoDB"],
    type: "Hybrid",
  },
  {
    id: 4,
    title: "WordPress Developer",
    company: "Creative Edge",
    location: "Remote",
    salary: "₹3 LPA - ₹6 LPA",
    experience: "1-2 Years",
    skills: ["WordPress", "Elementor", "PHP", "CSS"],
    type: "Freelance",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "NextGen Apps",
    location: "Pune",
    salary: "₹10 LPA - ₹18 LPA",
    experience: "4+ Years",
    skills: ["React", "Node.js", "MySQL", "TypeScript"],
    type: "Full Time",
  },
  
];
  return (
    <div className="component-wrapper">
        <Navbar />

        <div className="card-container">
          {jobInfo.map(function(elems){
            return <Card salary={elems.salary} />;
            // console.log(elems.title);
          })}

        </div>
    </div>
  )
}

export default App
