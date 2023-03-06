import data from '../data/coreValues.json'
import sdgs from '../data/sdgs.json'
import React from 'react'
import { HtmlHead } from '../components/Head'
import { Heading } from '../components/Heading'

const About = () => {
  return (
    <>
      <HtmlHead title="About Us" />
      <main className="pt-40">
        <section>
          <Heading header="About Us" />
          <p>
            We are a social enterprise engaged in climate-smart agriculture,
            specialising in end-to-end agricultural primary production, farmer
            and produce aggregation, and commodity trading. Our strategy focuses
            on increasing agricultural productivity and incomes sustainably,
            adapting to and strengthening resilience to climate change, and
            reducing and/or removing greenhouse gas emissions where possible.
          </p>
        </section>

        <section>
          <h2>Our Core Values</h2>
          <div className="grid grid-cols-2">
            {data && data.data.map(val =>(
              <div key={val.title} className="col-span-1">
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>OUR PLAN OF CHANGE</h2>
          <div className="grid grid-cols-2">
            {sdgs && sdgs.data.map(val =>(
              <div key={val.title} className="col-span-1">
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div>
            <div>
              <h1>OUR VISION</h1>
              <p>
                To become a leading investor in the agribusiness space by
                forming beneficial and profitable partnerships with smallholder
                farmers and other key stakeholders in Nigeria, making
                agribusiness appealing and attractive to young Nigerians.
              </p>
            </div>
            <div></div>
          </div>

          <div>
            <div></div>
            <div>
              <h1>OUR MISSION</h1>
              <p>
                To produce quality agricultural commodities using improved
                production systems, value addition and marketing innovations for
                multiple benefits.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default About
