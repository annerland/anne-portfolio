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

const generate = (count) => {
  const array = []

  for (let i = 0; i < count; i++) {
    array.push(new Star())
  }

  return array
}

const Index = () => {
  const [star, setStar] = useState([])
  const [cloud, setCloud] = useState([])

  useEffect(() => {
    setStar(generate(60))
    setCloud(generate(4))
  }, [])

  return (
    <div className='index-container'>
      <NavBar />
      <h1>
        <span>Anne</span>.dev
        <span className='underline'>_</span>
      </h1>

      <div className='cloud-container'>
        {cloud.map((elm, i) => {
          return (
            <img src={CloudSVG} className='cloud' style={elm.getStyle()} key={i} />
          )
        })}
      </div>

      {star.map((elm, i) => {
        return (
          <img src={StarSVG} className='star' style={elm.getStyle()} key={i} />
        )
      })}
    </div>
  )
}

export default Index
