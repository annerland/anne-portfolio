import React from 'react'
import NavBar from 'Components/atoms/navBar'
import Star from 'Assets/icons/star.svg'

import './index.scss'

const Index = () => {
  return (
    <div className='index-container'>
      <NavBar />
      <h1>
        <span>Anne</span>.dev
        <span className='underline'>_</span>
      </h1>

      <div className='stars-container'>
        <img className='star-one' src={Star} />
        <img className='star-two' src={Star} />
        <img className='star-three' src={Star} />
        <img className='star-four' src={Star} />
        <img className='star-five' src={Star} />
        <img className='star-six' src={Star} />
        <img className='star-seven' src={Star} />
        <img className='star-eight' src={Star} />
        <img className='star-nine' src={Star} />
      </div>
    </div>
  )
}

export default Index
