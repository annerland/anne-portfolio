import React, { useEffect, useState } from 'react'
import NavBar from 'Components/atoms/navBar'
import StarSVG from 'Assets/icons/star.svg'
import CloudSVG from 'Assets/icons/cloud.svg'

import './index.scss'

class Star {
  constructor () {
    this.x = Math.random() * 100
    this.y = Math.random() * 100
  }

  getStyle () {
    return {
      left: `${this.x}%`,
      top: `${this.y}%`
    }
  }
}

const generateStars = (starsCount) => {
  const array = []

  for (let i = 0; i < starsCount; i++) {
    array.push(new Star())
  }

  return array
}

const Index = () => {
  const [star, setStar] = useState([])

  useEffect(() => {
    setStar(generateStars(60))
  }, [])

  return (
    <div className='index-container'>
      <NavBar />
      <h1>
        <span>Anne</span>.dev
        <span className='underline'>_</span>
      </h1>

      {star.map((elm, i) => {
        return (
          <img src={StarSVG} style={elm.getStyle()} key={i} />
        )
      })}
    </div>
  )
}

export default Index
