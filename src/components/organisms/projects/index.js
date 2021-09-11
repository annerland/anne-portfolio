import React from 'react'
import Card from 'Components/molecules/card'
import Vaccinator from 'Assets/images/vaccinator.png'
import Anne from 'Assets/images/annedev.png'
import UndistroWeb from 'Assets/images/undistroweb.png'
import './index.scss'

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>

      <div className='cards-content'>
        <Card
          title='Vaccinator'
          src={Vaccinator}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere morbi leo urna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere.'
        />
        <Card
          title='Anne.dev'
          src={Anne}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere morbi leo urna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere.'
        />
        <Card
          title='Undistro Website'
          src={UndistroWeb}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere morbi leo urna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere.'
        />
        <Card
          title='Undistro'
          src={UndistroWeb}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere morbi leo urna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien et ligula ullamcorper malesuada proin libero. Pharetra convallis posuere.'
        />
      </div>
    </div>
  )
}

export default Projects
