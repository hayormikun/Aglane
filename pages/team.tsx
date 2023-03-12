import React from 'react'
import data from '../data/management.json'
import links from '../data/links.json'
import { HtmlHead } from '../components/Head'
import { Heading } from '../components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import { Gallery } from '../components/Sliders'

const Team = () => {
  return (
    <>
      <HtmlHead title="Meet the Team" />
      <main className="pt-40">
      <section>
        <Heading header="Management" />

        { data && data.data.map((staff, index) =>  (
        <div key={index} >
          {/* <Image src={staff.name} width={150} height={150} alt={staff.name} /> */}
          <span>{staff.name}</span>
          <span>{staff.designation}</span>
        </div>
        ))}
      </section>

      <section>
        <Heading header="Gallery"/>
        <Gallery />
      </section>

    <section> 
      <Heading header="JOIN OUR COMMUNITY" />
      {
        links && links.data.map((link, index) => (
          <div key={index} className="">
            <h3>{link.title}</h3>
            <Link target="_blank" href={link.link}>
              Register here
            </Link>
          </div>
        ))
      }
    </section>
      </main>
    </>
  )
}

export default Team
