import React from 'react'
import { AboutHeroSection } from './_components/AboutHeroSection'
import { MissionVision } from './_components/MissionVision'
import { CoreValues } from './_components/CoreValues'
import { Team } from './_components/TeamComponent'
import { Culture } from './_components/CultureComponent'
import { StoryVariant } from '@/components/variants/StoryVariant'
// import { Story } from './_components/StoryComponent'

export const metadata = {
  title: "About Us — VeilCode",
  description:
    "Learn about VeilCode — our story, mission, values, team, and the culture that drives our work.",
};

const AboutUsPage = () => {
  return (
      <>
          <AboutHeroSection />
          {/* <Story /> */}
          <StoryVariant />
          <MissionVision />
          <CoreValues />
          <Team />
          <Culture />
      </>
  )
}

export default AboutUsPage