import React from 'react';
import screenshot from '../images/project1.png';
import ProjectCard from  '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      id: "1",
      title: "Food Genie",
      image: screenshot
    },
    {
      id: "2",
      image: screenshot
    },
    {
      id: "project three",
      image: screenshot
    }

  ]
  return (
    <div>{projects.map(({id, image}) => {
      return <ProjectCard key={id} id={id} image={image}/>} )}</div>
  )
}

export default Portfolio