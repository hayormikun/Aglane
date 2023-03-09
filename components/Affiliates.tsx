import Image from 'next/image'
import React from 'react'
import pula from '../public/assests/Images/Clients-and-Affiliates/Group 68.svg'
import propoor from '../public/assests/Images/Clients-and-Affiliates/Group 69.svg'
import suntrust from '../public/assests/Images/Clients-and-Affiliates/Group 70.svg'
import sterling from '../public/assests/Images/Clients-and-Affiliates/Group 72.svg'
import grain from '../public/assests/Images/Clients-and-Affiliates/Group 73.svg'
import keystone from '../public/assests/Images/Clients-and-Affiliates/Group 74.svg'
import biowish from '../public/assests/Images/Clients-and-Affiliates/Group 76.svg'
import cbn from '../public/assests/Images/Clients-and-Affiliates/Group 77.svg'
import unity from '../public/assests/Images/Clients-and-Affiliates/Group 78.svg'
import trustBank from '../public/assests/Images/Clients-and-Affiliates/Group 79.svg'
import tajBank from '../public/assests/Images/Clients-and-Affiliates/Group 80.svg'
import veritas from '../public/assests/Images/Clients-and-Affiliates/Group 81.svg'
import thriveAgric from '../public/assests/Images/Clients-and-Affiliates/Group 82.svg'
import cropin from '../public/assests/Images/Clients-and-Affiliates/Group 83.svg'
import africaRe from '../public/assests/Images/Clients-and-Affiliates/Group 84.svg'
import heritageBank from '../public/assests/Images/Clients-and-Affiliates/Group 85.svg'

export const Affiliates = () => {
  const clients = [
    grain,
    sterling,
    cbn,
    unity,
    keystone,
    heritageBank,
    veritas,
    thriveAgric,
    cropin,
    africaRe,
    biowish,
    trustBank,
    tajBank,
    pula,
    propoor,
    suntrust,
  ]

  return (
    <div className='grid grid-cols-5 gap-10'>
      {clients &&
        clients.map((client, index) => (
          <div key={index} className="">
            <Image src={client} width={206} height={206} alt={client} loading="lazy" />
          </div>
        ))}
    </div>
  )
}
