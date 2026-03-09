import React from 'react'
import { ServicesHero } from './_components/ServicesHero'
import { ServicesOverview } from './_components/ServicesOverview'
import { ServiceDeepDives } from './_components/ServicesDeepDive'
import { DeliveryProcess } from './_components/DeliveryProcess'
import { PricingTiers } from './_components/PricingTiers'
import { FAQ } from './_components/FAQ'

const page = () => {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDeepDives />
      <DeliveryProcess />
      <PricingTiers />
      <FAQ />
    </>
  )
}

export default page