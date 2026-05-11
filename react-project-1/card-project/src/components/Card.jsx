import React from 'react'

const Card = (prop) => {
  return (
    <div>
      <div className="mainCard">
            <div className="top-bar">
              <div className="logo">{prop.title}</div>
              <div className="save-btn">Save</div>
            </div>
            <div className="content">
              <div className="company-name">Google <span>5 days ago</span></div>
              <div className="designation">{prop.designation}</div>
              <div className="job-type">
                <button className="batch">Part Time</button>
                <button className="batch">Senior Level</button>
              </div>
            </div>
            <div className="card-footer">
              <div className="left-amount">
                <h6>${prop.salary}/hr </h6>
                <p>Mumbai India</p>
              </div>
              <button className="primary">Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card
