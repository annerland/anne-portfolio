import React from 'react'
import './index.scss'

const WhoAmI = () => {
  return (
    <div className='whoami-container'>
      <div className='image-container'>
        <div className='purple-square' />
        <div className='pink-square' />
      </div>

      <div className='content'>
        <h1>Hi, I'm Anna Campelo, aka Anne.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default WhoAmI
