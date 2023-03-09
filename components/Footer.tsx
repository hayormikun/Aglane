import Image from 'next/image'
import logo from '/assests/AgLane_Logo.png'
import React from 'react'
import { FooterHeading, SmallHeader } from './Heading'
import twitter from '/assests/SVGs/FooterIcons/Twitter.svg'
import facebook from '/assests/SVGs/FooterIcons/Facebook.svg'
import instagram from '/assests/SVGs/FooterIcons/Instagram.svg'
import email from '/assests/SVGs/FooterIcons/Mail.svg'
import phone from '/assests/SVGs/FooterIcons/Phone.svg'
import linkedin from '/assests/SVGs/FooterIcons/Linkedin.svg'
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
      name: '@aglaneng',
      link: 'http://www.twitter.com/aglaneng',
      logo: twitter
    },
    {
      name: '@aglaneng',
      link: 'http://www.instagram.com/aglaneng',
      logo: instagram
    },
    {
      name: 'info@aglane.ng',
      link: 'mailto:info@aglane.ng',
      logo: email
    },
    {
      name: '+234 802 469 2369',
      link: '',
      logo: phone
    },
    {
      name: 'Aglane Nigeria Ltd',
      link: 'http://www.linkedin.com/AgLane-Nigeria-Ltd/',
      logo: linkedin
    },
    {
      name: 'Aglane Nigeria Ltd',
      link: 'https://web.facebook.com/people/AgLane-Nigeria-Ltd/',
      logo: facebook
    },
  ]

  return (
    <footer className='w-full bg-[#EAF1E6] pl-[3.125em] pt-10'>
      <span className='w-full h-auto'>
        <Image src={logo} width={204} height={80} alt='Aglane footer logo' loading='lazy' />
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
              <Link href={item.link} key={index} className="block mb-[1.25rem]">{item.name}</Link>
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
