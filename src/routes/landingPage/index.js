import React from 'react'
import Index from 'Components/organisms/index'
import WhoAmI from 'Components/organisms/whoami'
import Skills from 'Components/organisms/skills'
import Projects from 'Components/organisms/projects'
import Banner from 'Components/atoms/banner'
import Socials from 'Components/molecules/socials'

export default function LandingPage () {
  return (
    <>
      <Index />
      <WhoAmI />
      <Skills />
      <Projects />
      <Banner />
      <Socials />
    </>
  )
}
