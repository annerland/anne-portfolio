import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const SkillCard = ({ title, icon }) => {
  return (
    <div className='skill-card-container'>
      <p>{title}</p>

      <img src={icon} />
    </div>
  )
}

SkillCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

export default SkillCard
