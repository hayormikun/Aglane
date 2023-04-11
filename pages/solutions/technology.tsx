import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HtmlHead } from '../../components/Head'
import { Heading, MidHeading } from '../../components/Heading'

const technology = () => {
  return (
    <>
      <HtmlHead title="Our Technology" />
      <main className="pt-40 px-3 lg:px-[6.25rem] mb-0 w-full h-full">
        <Heading header="Our Technology" />

        <section className="w-full mx-auto">
          <MidHeading header="AgLanegrator" />
          <p className="font-normal font-quickSand text-xl md:text-2xl text-[#494949]">
            <b>AgLanegrator</b> is a software used in monitoring
            and tracking end-to-end agricultural primary production activities
            such as input distribution and usage, produce aggregation and
            storage, etc. it controls and administers warehouse operations from
            the time inputs or commodities enter a warehouse until they move
            out. It is useful in accessing bank loans and farm inputs...{' '}
            <Link
              href={'https://aglane-aggregator.com/app'}
              target={'_blank'}
              className="font-medium text-[#428841] underline"
            >
              {' '}
              Get Started with AgLangrator{' '}
            </Link>
          </p>

          <div className="w-full flex justify-center pb-10">
            <Link href={'https://aglane-aggregator.com/app'} target={'_blank'}>
              <Image
                src={'/assests/SVGs/solutions/Aglanegrator.svg'}
                width={800}
                height={640}
                alt="AgLangrator Infographic"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default technology
