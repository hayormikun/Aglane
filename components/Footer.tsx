import Image from 'next/image'
import React from 'react'
import { FooterHeading, SmallHeader } from './Heading'
import Link from 'next/link'
import { FaCopyright } from 'react-icons/fa'

export const Footer = () => {
  const footerNav = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Our Impact',
      link: '/impact',
    },
    {
      name: 'Our Solutions',
      link: '/solutions',
    },
    {
      name: 'Our Team',
      link: '/team',
    },
    {
      name: 'Careers',
      link: '/careers',
    }
  ]

  const footerSocials = [
    {
      name: 'Aglane Nigeria',
      link: 'http://www.twitter.com/AglaneNigeria',
      logo: '/assests/SVGs/FooterIcons/Twitter.svg'
    },
    {
      name: 'Aglane Nigeria',
      link: 'https://www.instagram.com/aglane_nigeria/',
      logo: '/assests/SVGs/FooterIcons/Instagram.svg'
    },
    {
      name: 'info@aglane.ng',
      link: 'mailto:info@aglane.ng',
      logo: '/assests/SVGs/FooterIcons/Mail.svg'
    },
    {
      name: '+234 802 469 2369',
      link: 'tel:+2348024692369',
      logo: '/assests/SVGs/FooterIcons/Phone.svg'
    },
    {
      name: 'Aglane Nigeria Ltd',
      link: 'http://www.linkedin.com/in/aglane-nigeria-5276a9265',
      logo: '/assests/SVGs/FooterIcons/Linkedin.svg'
    },
    {
      name: 'Aglane Nigeria Ltd',
      link: 'https://web.facebook.com/people/AgLane-Nigeria-Ltd/',
      logo: '/assests/SVGs/FooterIcons/Facebook.svg'
    },
  ]

  return (
    <footer className='w-full bg-[#EAF1E6] pl-[3.125em] pt-10'>
      <span className='w-full h-auto'>
        <Image src={'/assests/AgLane_Logo.png'} width={204} height={80} alt='Aglane footer logo' loading='lazy' />
      </span>

      <div className="grid grid-cols-3 ml-2 mt-[1.25em] text-[#3A3A3A] text-lg font-quickSand font-semibold">
        <div className="col-span-1">
          <FooterHeading header={"Contact Us"} />
          <SmallHeader header={"Head Office"} />
          <address className='not-italic'> 7, Gambo Sawaba Road, Gwarinpa, Abuja </address>
        </div>
        <div className="col-span-1 mx-auto">
          <FooterHeading header={"Company"} />
          
          <ul className='flex flex-col'>
          {
            footerNav.map((item, index)=>(
              <Link href={'/'} key={index} className="block mb-[1.25rem]">{item.name}</Link>
            ))
          }
          </ul>
        </div>
        <div className="col-span-1">
          <FooterHeading header={"Social Links"} />
          
          <ul className='flex flex-col'>
            {
              footerSocials.map((item, index)=>(
                <Link href={item.link} key={index} className="flex flex-row gap-3 mb-[1.25rem]">
                  <Image src={item.logo} width={24} height={24} alt={item.name}/>
                  {item.name}
                </Link>
              ))
            }
          </ul>
        </div>
      </div>
      
      {/* <span className='flex flex-row w-full justify-center py-3'> <FaCopyright width={5} height={5}/>  copyright</span> */}
    </footer>
  )
}
