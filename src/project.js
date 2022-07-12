import React from 'react';
import "./work.css";

export default function project() {
  const openInNewTab = url => {
    window.open(url, '_blank',);
};
  return (
    <div className='workdone work-inside-new'>
      <div className='d-flex flex-column'>
        <div className='d-flex flex-row justify-content-between'>
          <span className='company-name' ><h onClick={() => openInNewTab('https://rana603.github.io/Sorting-Visualizer/')}>Sorting Visualizer </h> </span>
          <span className='year-passout'>July 2022-july,2022</span>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <span className='position'>Web Developer</span>
        <span className='description-postion'>
          <ul>
            <li>{" "}
              Created a web application using HTML, CSS, Javascript to visualize how various sorting algorithms work.

            </li>
            <li>{" "}
              Creating the website's User Interface (UI) using HTML, CSS.
              Implementation of animations, effects and core functionalities (sorting algorithms) using JavaScript.
            </li>
            <li>
              Publish to GitHub and host this project live using gitbash.
            </li>

          </ul>
        </span>
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex flex-row justify-content-between'>
          <span className='company-name' ><h onClick={() => openInNewTab('https://rana603.github.io/Tic-Tac-Toe03.github.io/tictactoe.html')}>Tic-Tac-Toe</h>  </span>
          <span className='year-passout'>April,2022-May,2022</span>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <span className='position'>Self Project</span>
        <span className='description-postion'>
          <ul>
            <li>{" "}
            - Made a program for two players Tic Tac Toe game


            </li>
            <li>{" "}
            - three same symbols, horizontal or vertically or diagonally on a 3*3 grid signifies you win
            </li>
            <li>{" "}
            - Using Html, css, javascript, and python.           
            </li>

          </ul>
        </span>
      </div>
      

    </div>

  )
}
