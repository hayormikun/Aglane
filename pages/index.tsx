import Image from 'next/image'
import data from '../data/socialImpact.json'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import { HtmlHead } from '../components/Head'
import { useState } from 'react'
import { AccordionItem } from '../components/AccordionItem'
import { Link } from 'react-scroll'
// import landingImage from '../public/assests/Images/pexels-safari-consoler-11588042.jpg'

const primaryServices = [
  {
    icon: 'End-to-end agricultural primary production',
    title: 'End-to-end agricultural primary production',
  },

  {
    icon: 'Farmer & Produce Aggregation',
    title: 'Farmer & Produce Aggregation',
  },

  {
    icon: 'Commodity Trading',
    title: 'Commodity Trading',
  },
]

const additionalServices = [
  'Management and monitoring of mechanization service delivery',
  'Management and monitoring of agronomic calendar/cycle',
  'Logistics management delivery',
  'Input sourcing and utilization management',
  'Sourcing extension services',
  'Sourcing and management warehousing facilities',
]

export default function Home() {
  const [open, setOpen] = useState<number | boolean>(false)

  const toggle = (index: number) => {
    if (open === index) return setOpen(false)
    setOpen(index)
  }

  return (
    <>
      <HtmlHead title="Homepage" />
      <main className="pt-[11.875rem] mx-10 md:mx-[3.125em]">
        <section className="grid grid-cols-2 gap-[3.125em]">
          <div className="col-span-1 flex-col">
            <p className="font-montserrat font-semibold text-5xl leading-[4.0625rem]">
              Establishing beneficial and profitable partnerships with
              smallholder farmers in Nigeria.
            </p>
            <Link
             activeClass={'services'}
             to={'services'}
             offset={-50}
             duration={500}
             smooth={true}
             className="flex flex-row mt-[3.75em] w-[15.875rem] px-[1.8725rem] h-20 bg-[#428821] hover:bg-[#346c1a] hover:cursor-pointer rounded-[0.625em] justify-start items-center"
             >
                <span className="text-white font-lexand font-normal text-2xl mr-[1.8725rem]">
                  Learn More
                </span>
                <FaArrowRight className="text-white h-[0.9375rem] w-[1.8725rem]" />
            </Link>
          </div>
          <div className="col-span-1">
            {/* <Image src={landingImage} width={565} height={400} alt="" loading='lazy' placeholder='blur'/> */}
          </div>
        </section>

        <section>
          <div className="">
            <h1>SOCIAL IMPACT</h1>
            <p>
              Our major social impact as operators in the Agribusiness space is
              enhancing a sustainable and effective food system, which includes
              promoting sustainable agriculture to end hunger and malnutrition
              with the guarantee that this will create healthier communities and
              a more prosperous nation. As a measure of social impact, some
              sustainable development goals that our work touches on are SDG
              goals 1, 2, 5, 8, 9, 12 and 13.
            </p>
          </div>

          {data &&
            data.data.map((impact, index) => (
              <div key={index} className="">
                <div key={index} className="col-span-1">
                  <AccordionItem
                    key={index}
                    open={index === open}
                    toggle={() => toggle(index)}
                    title={impact.title}
                    description={impact.description}
                  />
                </div>
              </div>
            ))}
        </section>

        <section id='services' className='mt-96'>
          <h2>What we do</h2>
          {primaryServices &&
            primaryServices.map((service, index) => (
              <div className="" key={index}>
                <span>{service.icon}</span>
                <span>{service.title}</span>
              </div>
            ))}
          We provide the following additional services:
          {additionalServices.map((val, index) => (
            <p key={index}>{val}</p>
          ))}
        </section>
      </main>
    </>
  )
}
