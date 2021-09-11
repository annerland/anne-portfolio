import React from 'react'
import PropTypes from 'prop-types'
import Github from 'Assets/icons/github.png'
import './index.scss'

const Card = ({ title, src, description, link }) => {
  return (
    <div className='card-container'>
      <header>
        <h2>{title}</h2>
      </header>
      <section>
        <img src={src} />
        <p>{description}</p>
      </section>

      <footer>
        <img src={Github} onClick={() => window.location.href('github.com/AnnaCampelo/')} />
      </footer>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

export default Card
