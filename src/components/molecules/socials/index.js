import React from 'react'
import Git from 'Assets/icons/github.png'
import Linkedin from 'Assets/icons/linkedin.png'
import Twitch from 'Assets/icons/twitch.png'
import Twitter from 'Assets/icons/twitter.png'
import './index.scss'

const Socials = () => {
  return (
    <div className='socials-container'>
      <h1>You can also find me on</h1>

      <div className='socials-content'>
        <img src={Git} />
        <img src={Linkedin} />
        <img src={Twitch} />
        <img src={Twitter} />
      </div>
    </div>
  )
}

export default Socials
