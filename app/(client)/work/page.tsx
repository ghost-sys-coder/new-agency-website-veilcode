import React from 'react'
import { WorkHero } from './_components/WorkHero'
import { PortfolioGrid } from './_components/PortfolioGrid'
import { WorkImpact } from './_components/WorkImpact'
import { CTA } from '@/components/shared/CTA'

const page = () => {
  return (
      <>
          <WorkHero />
          <PortfolioGrid />
          <WorkImpact />
          <CTA />
      </>
  )
}

export default page