import Image from 'next/image'
import React from 'react'

export const Affiliates = () => {
  const clients = [
    '/assests/Images/Clients-and-Affiliates/Group-73.svg',
    '/assests/Images/Clients-and-Affiliates/Group-72.svg',
    '/assests/Images/Clients-and-Affiliates/Group-77.svg',
    '/assests/Images/Clients-and-Affiliates/Group-78.svg',
    '/assests/Images/Clients-and-Affiliates/Group-74.svg',
    '/assests/Images/Clients-and-Affiliates/Group-85.svg',
    '/assests/Images/Clients-and-Affiliates/Group-81.svg',
    '/assests/Images/Clients-and-Affiliates/Group-82.svg',
    '/assests/Images/Clients-and-Affiliates/Group-83.svg',
    '/assests/Images/Clients-and-Affiliates/Group-84.svg',
    '/assests/Images/Clients-and-Affiliates/Group-76.svg',
    '/assests/Images/Clients-and-Affiliates/Group-79.svg',
    '/assests/Images/Clients-and-Affiliates/Group-80.svg',
    '/assests/Images/Clients-and-Affiliates/Group-68.svg',
    '/assests/Images/Clients-and-Affiliates/Group-69.svg',
    '/assests/Images/Clients-and-Affiliates/Group-70.svg',
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
