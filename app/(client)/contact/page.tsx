import React from 'react'
import { ContactHero } from './_components/ContactHero'
import { ContactMain } from './_components/ContactMain'
import { TrustStrip } from './_components/TrustStrip'
import { BookingCTA } from './_components/BookingCTA'

const page = () => {
    return (
        <>
            <ContactHero />
            <ContactMain />
            <TrustStrip />
            <BookingCTA />
        </>
    )
}

export default page