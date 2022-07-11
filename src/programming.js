import React from 'react'
import "./programming.css";
import image2 from './html.png';
import image3 from './css.png';
import image4 from './js.png';
import image5 from './python.png';
import image6 from './java.png';
import image7 from './bootstrap.png';
import image8 from './mysql.png';
import image9 from './nodejs.png';


export default function programming() {
  // const value = [
  //   {
  //     text: 'JAVA',
  //     percentage: 80
  //   },
  //   {
  //     text: 'Python',
  //     percentage: 80
  //   },
  //   {
  //     text: "HTML",
  //     percentage: 100
  //   },
  //   {
  //     text: "CSS",
  //     percentage: 80
  //   },
  //   {
  //     text: "React.js",
  //     percentage: 70
  //   },
  //   {
  //     text: "Bootstrap",
  //     percentage: 50
  //   },
  //   {
  //     text: "Javascript",
  //     percentage: 50
  //   }
  // ];
  return (
    <div className='inner'>
      <div className='header'>
        {/* <h3>My Skill</h3> */}
      </div>
      <div className='containers'>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image2} alt="" />
            </div>
            <h3>HTMl 5</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image3} alt="" />
            </div>
            <h3>   CSS</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image4} alt="" />
            </div>
            <h3>Javascript</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image5} alt="" />
            </div>
            <h3>Python</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image6} alt="" />
            </div>
            <h3>java</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image7} alt="" />
            </div>
            <h3>bootstrap</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image8} alt="" />
            </div>
            <h3>My sql</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={image9} alt="" />
            </div>
            <h3>Nodejs</h3>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div>
    //     <div className='row'>
    //       {value.map((value, index) => {
    //         return (
    //           <>
    //             <div className='col-lg-6 col-mg-6 col-sm-12 my-2'>
    //               <span className='language'> {value.text}</span>
    //               <div className='progress-some'>
    //                 <div className='progress-new' style={{width:'s{value.percentage}%'}}></div>
    //               </div>
    //             </div>
    //           </>


    //         )
    //       })}

    //     </div>
    //   </div>
    // </>

  )
}
