import React from 'react'
import myPic from '../images/IMG_2587.JPG'

function About() {
  return (
    <div>
      <p className="content is-medium">Problem Solver and Aspiring Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={myPic} alt="James Giraldo"/>
      <p className="content is-italic mt-4">
        I'm James, a problem solver studying the full stack to enter the software development
        world. Searching for a junior role opportunity.
      </p>
      <p className="content">
        Something about my skills here
      </p>
    </div>
  )
}

export default About