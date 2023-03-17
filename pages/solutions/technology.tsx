import Image from 'next/image'
import React from 'react'
import { HtmlHead } from '../../components/Head'
import { Heading, MidHeading } from '../../components/Heading'

const technology = () => {
  return (
    <>
      <HtmlHead title="Our Technology" />
      <main className="pt-40 px-[3.125em] mb-0 w-full h-full color-[#3A3A3A]">
        <Heading header="Our Technology" />

        <section className='w-full mx-auto'>
          <MidHeading header="AgLanegrator" />
          <p className='font-quickSand text-2xl text-[#3A3A3A]'>
            <b>AgLanegrator</b> is a solution designed specifically to meet the
            challenges of farmers in Nigeria. It focuses on assisting women,
            youths, rural and remote farmers in accessing loans, and farm
            inputs, (fertilizers, machinery, seeds, etc.) from relevant sources
            and agencies. The software allows for a transparent holistic
            approach to monitoring farmers, inputs, and produce.
          </p>
          <div className="w-full flex justify-center pb-10">
            <Image src={"/assests/SVGs/solutions/Aglanegrator.svg"} width={800} height={640} alt="AgLangrator Infographic" />
          </div>
        </section>
      </main>
    </>
  )
}

export default technology
