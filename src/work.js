import React from 'react'
import "./work.css";

export default function work() {
  return (
    <div className='workdone work-inside-new'>
      <div className='d-flex flex-column'>
        <div className='d-flex flex-row justify-content-between'>
          <span className='company-name'><a href="https://github.com/rana603/The-spark-Bank">The Spark Foundation</a>  </span>
          <span className='year-passout'>may,25-june,25</span>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <span className='position'>Web Developer intern</span>
        <span className='description-postion'>
          <ul>
            <li>{" "}
              Created a dynamic banking website where user can transfer the money

            </li>
            <li>{" "}
              - Using HTML, CSS Java-script
            </li>

          </ul>
        </span>
      </div>

    </div>

  )
}
