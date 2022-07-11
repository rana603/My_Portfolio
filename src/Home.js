import React from 'react'
import './Home.css';
import './header.css';
import images1 from './gsr.jpeg';
import Programming from "./programming"
import Work from './work';
import Education from './education';
import Projects from './project';


import './footer';

import { useState } from "react"

function Home() {
    const [education, seteducation] = useState(true);
    const [workhistory, setworkhistory] = useState(false);
    const [programmings, setprogrammings] = useState(false);
    const [projects, setprojects] = useState(false);
    const [opennav, setopennav] = useState(false);
    const openInNewTab = url => {
        window.open(url, '_blank',);
    };

    function SetallFalse() {
        seteducation(false);
        setworkhistory(false);
        setprogrammings(false);
        setprojects(false);
    }
    function ChangeState(function1, state1) {
        SetallFalse();
        function1(state1);
    }

    return (
        <div>

            <div className="home">
                <div className='navbar-option-mobile bg-new  '>
                    <div className='d-flex flex-row '>
                        <span className='brand-name d-flex align-items-left justify-content-left'>Gautam Singh{" "}</span>
                        <div className='bars mx-9 my-3 px-8  align-items-right justify-content-right' onClick={() => setopennav(!opennav)}>{" "}</div>
                    </div>

                </div>
                <nav className=
                    {!opennav ?
                        'd-flex bg-new  px-5 py-2 navbar-news flex-rows transition-all' :
                        'd-flex bg-new  px-5 py-2 navbars-fixed-new flex-rows transition-all '}>
                    <a className='brand-name' href="#home">My portfolio</a>

                    <div className='d-flex flex-rows'>
                        <a className='mx-4 nav-items' href='#home' onClick={() => setopennav(!opennav)}>Home{" "}</a>
                        <a className='mx-4 nav-items' href='#about' onClick={() => setopennav(!opennav)}>About {" "}</a>
                        <a className='mx-4 nav-items' href='#resume' onClick={() => setopennav(!opennav)}>Resume {" "} </a>
                        <a className='mx-4 nav-items' href='#contact' onClick={() => setopennav(!opennav)}>Contact {" "} </a>
                    </div>
                </nav>
                <div className='heerosections px-0 py-0'>

                    <div className='herosection row justify-content-center' id='home'>
                       
                        <div className='col-lg-6 col-md-6 col-sm-12'>

                            <div className='d-flex flex-column justify-content-center in-text-section'>
                                <span className='in-text'><br /><br />
                                    Hello, I'm <span className='name-in-text'>Gautam Singh</span><br />
                                    <span className='in-text-enthusiastic py-2'>Enthusiastic Developer</span><br />
                                    <span className='in-text-subheading'>Knack of Building application with front and back end operations</span>
                                </span>
                                <div className='d-flex flex-row justify-content-center mt-5'>
                                    <a href='#contact' className='btn-hire-me'>Hire me</a>
                                    <button className='btn-resume-me' onClick={() => openInNewTab('https://drive.google.com/file/d/1eVWQK7HmJCoObn_Hv4ce9Y1V_gTOH9Lw/view?usp=sharing')}>Get Resume</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-me-section aboutme-inside my-3'>
                    <div className='d-flex flex-column'>
                        <span className='about-me-text' id='about'>About me</span>
                        <span className='why-text-sub'>Why Choose  me</span>
                        <div className='row justify-content-center shadow-lg my-3'>

                            <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-center-center'>
                                <img className='img-fluid custon-img' src={images1} alt="" />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 d-flex py-0 flex-column '><br /><br />
                                <span className='some-text-about-me'>I'm Gautam and I'm <span className='text'>Web developer</span> </span>
                                <p className='some-text-about-me'>I am a constant learner and very enthusiatic for working with new people and new technologies. i have good problem solving skills. i am also into web development.<br /> currently i am exploring more into new frameworks and  i believe in team work. <br /> i am determined to give my best of everything that i will be assigned</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='resume-outer-section d-flex flex-column'>
                    <span className='about-me-text' id='resume'>Resume</span>
                    <span className='why-text-sub'>My Formal Bio details</span>


                    <div className='resume-new-section row'
                        style={{ width: "100% ", marginInline: "auto", height: "400px" }}>

                        <div className='col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex flex-row shadow-lg px-0'>
                            <div className='d-flex flex-column bg-new px-0 text-white '>

                                <span className='icons-span'>
                                    <i class="fa-solid fa-user-graduate"></i>{ }
                                </span>
                                <span className='icons-span'>
                                    <i class="fa-solid fa-briefcase"></i>{ }
                                </span>
                                <span className='icons-span'>
                                    <i class="fa-solid fa-laptop-code"></i>{ }
                                </span>
                                <span className='icons-span'>
                                    <i class="fa-solid fa-list-check"></i>{ }
                                </span>
                            </div>
                            <div className='d-flex flex-column'>

                                {/* </div> */}
                                {/* <div className='col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex flex-column'> */}
                                <span
                                    className={education === false ?
                                        'resume-options-items' :
                                        "selected resume-options-items"}
                                    onClick={() => {
                                        ChangeState(seteducation, true);
                                    }}>Education{" "}
                                </span>
                                <span className={workhistory === false ?
                                    'resume-options-items' :
                                    "selected resume-options-items"}
                                    onClick={() => {
                                        ChangeState(setworkhistory, true);
                                    }}>Work{" "}
                                </span>
                                <span className={programmings === false ?
                                    'resume-options-items' :
                                    "selected resume-options-items"}
                                    onClick={() => {
                                        ChangeState(setprogrammings, true);
                                    }}>Programming{" "}
                                </span>
                                <span className={projects === false ?
                                    'resume-options-items' :
                                    "selected resume-options-items"}
                                    onClick={() => {
                                        ChangeState(setprojects, true);
                                    }}>Projects{" "}
                                </span>
                            </div>

                        </div>

                        <div className='col-lg-8 col-md-8 col-sm-12 resume-right-section px-15 bg-white '>
                            {education === true && <Education />}
                            {workhistory === true && <Work />}
                            {programmings === true && <Programming />}
                            {projects === true && <Projects />}
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <span className='about-me-text d-flex flex-column' id='contact'>Contact me</span>
                    <span className='why-text-sub d-flex flex-column'>Get in Touch</span>
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST" >
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" placeholder='Name' />
                                           
                                        </div>
                                    </div>
                                    <br />

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control" placeholder='Email-id' />
                                            
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control" placeholder='Subject' />
                                            
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row">

                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="6" class="form-control md-textarea" placeholder='Message'></textarea>
                                        
                                        </div>

                                    </div>
                                </div>
                            </form>
                            <br />
                            <div class="text-center text-md-left">
                                <input class="btn btn-primary" type="button" value="Send Massage" />
                    
                            </div>
                            <div class="status"></div>
                        </div>

                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Haldwani, Uttarakhand (India)</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+919389688456</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x" ></i>
                                    <p onClick={()=> openInNewTab('https://mail.google.com/' )}
                                    >gautam.rana603@gmail.com</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>
            </div>

        </div>




    )
}

export default Home
