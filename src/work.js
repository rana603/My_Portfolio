import React from 'react'
import "./work.css";

export default function work() {
  const openInNewTab = url => {
    window.open(url, '_blank',);
};
  return (
    <div className='workdone work-inside-new'>
      <div className='d-flex flex-column'>
        <div className='d-flex flex-row justify-content-between'>
          <span className='company-name'><h onClick={() => openInNewTab('https://github.com/rana603/The-spark-Bank')}>Web Developer Intern</h>  </span>
          <span className='year-passout'>may,25-june,25</span>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <span className='position'>The Spark Foundation-Internship</span>
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
