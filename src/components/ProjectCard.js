import React from 'react'


const ProjectCard = (props) => {
  return (
    <div key={props.key}>{props.id}
    <img src={props.image} alt={props.id}></img>
    </div>
  )
}

export default ProjectCard