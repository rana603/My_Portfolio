import React from 'react'

export default function footer() {
    const openInNewTab=url=> {
        window.open(url, '_blank',);};
    return (
        <footer className="bg-dark text-center text-white">
  
            <div className="container p-4 pb-0">
            <h1>Links</h1>

                <section className="mb-3">
                    <button className='btn btn-outline-light btn-floating m-1' onClick={()=> openInNewTab('https://leetcode.com/gr365789/' )}><span className="iconify" data-icon="simple-icons:leetcode"></span></button>
                   
                    <button className='btn btn-outline-light btn-floating m-1' onClick={()=> openInNewTab('https://www.instagram.com/gautam_rana_603/' )}><i className="fab fa-instagram"></i></button>

                    <button className='btn btn-outline-light btn-floating m-1' onClick={()=> openInNewTab('https://www.linkedin.com/in/gautam-singh-632512164/' )}><i className="fab fa-linkedin-in"></i
                    ></button>
                   
                    <button className='btn btn-outline-light btn-floating m-1' onClick={()=> openInNewTab('https://github.com/rana603' )}><i className="fab fa-github"></i
                    ></button>
                </section>

            </div>



            <div className="text-center p-3" >
        
                <a className="text-white text-decoration-none" href="https://mdbootstrap.com/">©Copyright 2022 Gautam portfolio</a>
            </div>
           
        </footer>
    )
}
