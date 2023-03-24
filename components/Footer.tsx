import Image from 'next/image'
import React from 'react'
import { MidHeading, SmallHeader } from './Heading'
import { format } from 'date-fns'
import data from '../data/footerLinks.json'
import Link from 'next/link'

export const Footer = () => {
  const date = new Date()
  const year = format(date, 'yyyy')

  return (
    <footer className="w-full bg-[#EAF1E6] pl-[3.125em] pt-10 mb-0">
      <span className="w-full h-auto">
        <Link href={'/'}>
          <Image
            src={'/assests/AgLane_Logo.png'}
            width={204}
            height={80}
            alt="Aglane footer logo"
            loading="lazy"
          />
        </Link>
      </span>

      <div className="grid md:grid-cols-3 ml-2 mt-[1.25em] text-[#3A3A3A] text-lg font-quickSand font-semibold">
        <div className="col-span-1">
          <MidHeading header={'Contact Us'} />
          <SmallHeader header={'Head Office'} />
          <address className="not-italic">
            {' '}
            7, Gambo Sawaba Road, Gwarinpa, Abuja{' '}
          </address>
        </div>
        <div className="col-span-1 md:mx-auto">
          <MidHeading header={'Company'} />

          <ul className="flex flex-col w-fit">
            {data &&
              data.footerNav.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="block mb-[1.25rem] w-fit hover:text-[#428821] hover:font-bold transition-all"
                >
                  {item.name}
                </Link>
              ))}
          </ul>
        </div>
        <div className="col-span-1">
          <MidHeading header={'Social Links'} />

          <ul className="flex flex-col w-fit">
            {data &&
              data.socials.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="flex flex-row gap-3 mb-[1.25rem] hover:font-bold hover:text-[#428821] transition-all w-fit"
                >
                  <Image
                    src={item.logo}
                    width={26}
                    height={26}
                    alt={item.name}
                  />
                  {item.name}
                </Link>
              ))}
          </ul>
        </div>
      </div>

      
      <h3 className="flex flex-row w-full font-semibold text-[#3A3A3A] justify-center md:justify-start py-3">
        Aglane Nigeria Ltd <span className="mx-1 h-3 w-3"> &copy; </span> {year}
      </h3>
    </footer>
  )
}
