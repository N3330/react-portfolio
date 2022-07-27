import React from 'react';
import screenshot from '../images/project1.png';
import weatherApp from '../images/WeatherApp.png';
import ProjectCard from  '../components/ProjectCard';
import scheduler from '../images/WorkDayScheduler.png'

function Portfolio() {
  const projects = [
    {
      id: "1",
      title: "Food Genie",
      image: screenshot,
      languages: "HTML, CSS, JS",
      description: "An app that lets you hit youtube and recipe API's to get video and recipe results in one page",
      repo:"https://github.com/N3330/Food-Genie"
    },
    {
      id: "2",
      title: "Weather App",
      image: weatherApp,
      languages: "HTML, CSS, JS",
      description: "An app that allows you to see the weather forecast for a specific searched city",
      repo:"https://github.com/N3330/weather-forecast"
    },
    {
      id: "3",
      title: "Work Day Scheduler",
      image: scheduler,
      languages: "HTML, CSS, JS",
      description: "a daily planner to create a schedule. When the app is opened the current day and date is listed at the top of the page. When you scroll down you will see time blocks for the day and each time block is color coded indicating whether its in the past, present or future. When the time blocks are clicked you can type your event inside. When you click the save button for that time block then the text will be saved to local storage which means if the page is refreshed the even will remain saved.",
      repo: "https://github.com/N3330/my-calendar-app"
    }

  ]
  return (
    <div>{projects.map(({id, image, title, languages, description, repo}) => {
      return <ProjectCard key={id} id={id} title={title} image={image} languages={languages} description={description} repo={repo}/>} )}</div>
  )
}

export default Portfolio