import data from '../data/coreValues.json'
import sdgs from '../data/sdgs.json'
import React, { useState } from 'react'
import { HtmlHead } from '../components/Head'
import { Heading, MidHeading, SmallHeader } from '../components/Heading'
import { AccordionItem } from '../components/AccordionItem'
import Image from 'next/image'

const About = () => {
  const [open, setOpen] = useState<number | boolean>(false)
  const [readMore, setReadMore] = useState(false)

  const toggle = (index: number) => {
    if (open === index) return setOpen(false)
    setOpen(index)
  }

  const read = () => {
    setReadMore(!readMore)
  }

  return (
    <>
      <HtmlHead title="About Us" />
      <main className="pt-40 px-[3.125em] mb-0 w-full h-full color-[#3A3A3A]">
        <section className="mb-[4.357rem]">
          <Heading header="About Us" />
          <p className="font-quickSand font-medium text-[1.625rem] leading-[2.75rem]">
            We are a social enterprise engaged in climate-smart agriculture,
            specializing in end-to-end agricultural primary production, farmer
            and produce aggregation, and commodity trading for sustainable food
            systems. Our strategy focuses on increasing agricultural
            productivity and income sustainably, adapting to and strengthening
            resilience to climate change, and reducing and/or removing
            greenhouse gas emissions where possible.
          </p>
        </section>

        <section className="flex flex-col gap-y-14">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="col-span-1">
              <MidHeading header={'OUR VISION'} />

              <p className="font-quickSand font-medium text-[1.625rem] leading-[2.75rem]">
                To become a leading investor in the agribusiness space by
                forming beneficial and profitable partnerships with smallholder
                farmers and other key stakeholders in Nigeria, making
                agribusiness appealing and attractive to young Nigerians.
                <br />
                <br />
                <span className="font-semibold">
                  Our Key Focus: Building food systems, achieving food security,
                  adopting innovative technology and creating impact in line
                  with targeted SDGs
                </span>
              </p>
            </div>
            <div className="col-span-1">
              <Image
                src={'/assests/SVGs/about/vision.svg'}
                width={565}
                height={423}
                alt={'Vision image'}
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-5">
            <div className="col-span-1">
              <Image
                src={'/assests/SVGs/about/mission.svg'}
                width={565}
                height={423}
                alt={'Vision image'}
              />
            </div>
            <div className="col-span-1">
              <MidHeading header={'OUR MISSION'} />
              <p className="font-quickSand font-medium text-[1.625rem] leading-[2.75rem]">
                To produce quality agricultural commodities using improved
                production systems, value addition and marketing innovations for
                multiple benefits.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="mt-[4.357rem] mb-[4.357rem]">
          <h2>Our Core Values</h2>
          <div className="grid grid-cols-2">
            {data &&
              data.data.map((val, index) => (
                <div key={index} className="col-span-1">
                  <AccordionItem
                    key={index}
                    open={index === open}
                    toggle={() => toggle(index)}
                    title={val.title}
                    description={val.description}
                  />
                </div>
              ))}
          </div>
        </section> */}

        {/* <section className="">
          <MidHeading header="OUR PLAN OF CHANGE" />
          <div className="grid grid-cols-2">
            {data &&
              data.data.map((val, index) => (
                <div key={index} className="col-span-1">
                  <AccordionItem
                    key={index}
                    open={index === open}
                    toggle={() => toggle(index)}
                    title={val.title}
                    description={val.description}
                  />
                </div>
              ))}
          </div>
        </section> */}

        <section className="mt-[4.357rem] pb-[4.357rem]">
          <MidHeading header={'MANAGING PARTNER’S ADDRESS'} />

          <div className="grid md:grid-cols-[23.75rem_auto] gap-7 w-full mb-7">
            <div className="col-span-[23.75rem] bg-[#FCFCFC] mt-5 md:mt-0">
              <Image
                src={'/assests/SVGs/team/managing_partner.svg'}
                width={360}
                height={360}
                alt={'Managing Partner'}
              />

              <div className="flex flex-col text-center w-full">
                <h3 className="text-[1.875rem] leading-[2.29em] font-montserrat font-semibold text-[#428821]">
                  Olusola Omole
                </h3>
                <span className="font-quickSand font-medium text-2xl">
                  Managing Partner
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-quickSand text-[1.625rem] leading-[3.5rem] font-medium">
                “Agribusiness is undergoing a major transformation as advances
                in technology continue to revolutionize the ecosystem. From
                digital agriculture to precision and climate-smart agriculture,
                the way we grow and manage our farmlands is becoming more
                innovative and efficient by the day. We at AgLane have embraced
                this wave of change and taken full advantage of the
                opportunities. Our approach to Agribusiness focuses on utilizing
                digital technology to create a fully integrated system that
                supports farmers.
                <span className={readMore ? 'flex' : 'hidden'}>
                  {' '}
                  I am thrilled to announce that our team of agricultural
                  experts is leveraging new and cutting-edge technology,
                  automation, and digital tools to improve the efficiency of our
                  operations, make data-driven decisions, minimize crop loss and
                  boost crop yield. We are also utilizing digital tools to
                  enhance remote monitoring, improve water management and give
                  insights into soil health. At AgLane, we are dedicated to
                  helping our customers and partners grow, thrive, and succeed
                  in the ever-changing agribusiness landscape. We provide
                  innovative solutions that leverage the power of technology to
                  maximize operational efficiency, streamline production, and
                  facilitate the aggregation and trading of healthy agricultural
                  products. Our main business focus is to redefine agriculture
                  through primary crop production, farmer and produce
                  aggregation, and commodity trading. We are confident that we
                  can build better food systems through our modern technologies,
                  one of which is the AgLanegrator software. We embrace
                  innovation and excellence in all our operations, to continue
                  improving access and quality in the food production sector. We
                  are driven by innovation to provide you with the needed tools
                  to run a productive agribusiness. We are excited to continue
                  working together with our existing and prospective customers
                  to make agriculture more successful and sustainable. <br />{' '}
                  <br />
                  Thank you.”
                </span>
                {readMore ? (
                  <button className='text-xl font-light text-blue-500' onClick={()=>read()}>read less...</button>
                ) : (
                  <button className='text-xl font-light text-blue-500' onClick={()=>read()}>read more...</button>
                )}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
