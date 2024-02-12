import React, { useRef, Component } from 'react'
import './intro.scss'
import { init } from 'ityped'
import { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { showCursor: true,
      backDelay:1500,
      backSpeed: 60,
      strings: ["Suman", "Tuhin", "Pritam" ], })
  }, [])
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="https://img.freepik.com/premium-vector/mountain-hiker-flat_215665-375.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Lorem, ipsum dolor.</h2>
          <h1>Lorem ipsum dolor sit.</h1>
          <h3>Lorem ipsum <span ref={textRef}></span></h3>
        </div>
        {/* <a href="#portfolio">
          <img src="" alt="" />
        </a> */}
      </div>
      </div>
  )
}
