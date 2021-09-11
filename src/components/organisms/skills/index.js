import React from 'react'
import SkillCard from 'Components/atoms/skillCard'
import ReactIcon from 'Assets/images/react.png'
import Aws from 'Assets/images/aws.png'
import Redux from 'Assets/images/redux.png'
import Sass from 'Assets/images/sass.png'
import './index.scss'

const Skills = () => {
  return (
    <div className='skills-container'>
      <h1>Skills</h1>

      <div className='skills-content'>
        <SkillCard title='React' icon={ReactIcon} />
        <SkillCard title='AWS' icon={Aws} />
        <SkillCard title='Redux' icon={Redux} />
        <SkillCard title='Sass' icon={Sass} />
      </div>
    </div>
  )
}

export default Skills
