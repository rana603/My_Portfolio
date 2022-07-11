import React from 'react'
import "./education.css";

export default function education() {
  return (
    <div className='d-flex flex-column bg-black'>
      <div className='education-one my-3 justify-content-between d-flex flex-row'>
        <div className='d-flex flex-column new-one'>
          <span className='university-name'>
            Indian Institute of Technology, Kanpur{" "}
          </span>
          <span className='university-degree'>
            Master of Technolgy in Chemical Engineering{" "} <br />
            CGPA : 6.67/10
          </span>
        </div>{" "}
        <div>
          <span className='year-passout'>2020-2022</span>
        </div>
      </div>
      <div className='education-one my-3 justify-content-between d-flex flex-row'>
        <div className='d-flex flex-column new-one'>
          <span className='university-name'>
            Bipin Tripathi Kumaon Institute of Technology, Dwarahat {" "}
          </span>
          <span className='university-degree'>
            Bachalor of Technolgy in Chemical Engineering{" "} <br />
            Percentage : 60%
          </span>
        </div>{" "}
        <div>
          <span className='year-passout'>2014-2018</span>
        </div>
      </div>
      <div className='education-one my-2 justify-content-between d-flex flex-row'>
        <div className='d-flex flex-column new-one'>
          <span className='university-name'>
            Govt. Inter College, Bijity Patiya, Sitarganj (Uttarakhand){" "}
          </span>
          <span className='university-degree'>
            Intermediate{" "} <br />
            Percentage : 67.2%
          </span>
        </div>{" "}
        <div>
          <span className='year-passout'>2013-2014</span>
        </div>
      </div>
      <div className='education-one my-2 justify-content-between d-flex flex-row'>
        <div className='d-flex flex-column new-one'>
          <span className='university-name'>
          Govt. Inter College, Bijity Patiya, Sitarganj (Uttarakhand){" "}
          </span>
          <span className='university-degree'>
            high school{" "} <br />
            Percentage : 76.6%
          </span>
        </div>{" "}
        <div>
          <span className='year-passout'>2011-2012</span>
        </div>
      </div>
    </div>
  )
}
