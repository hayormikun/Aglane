import Image from 'next/image'
import { HtmlHead } from '../../components/Head'
import { Heading, SmallHeader } from '../../components/Heading'
import data from '../../data/socialImpact.json'

const socialImpact = () => {
  return (
    <>
      <HtmlHead title="Social Impact" />
      <main className="pt-40 px-3 lg:px-[3.125em] mb-0 w-full h-full">
        <Heading header="Social Impact" />

        <section>
          <p className="font-quickSand text-xl md:text-2xl text-[#494949] pb-10">
            Our major social impact as operators in the Agribusiness space is
            enhancing a sustainable and effective food system, which includes
            promoting sustainable agriculture to end hunger and malnutrition
            with the guarantee that this will create healthier communities and a
            more prosperous nation. As a measure of social impact, some
            sustainable development goals that our work touches on are SDG 1, 2,
            5, 8, 9, 12 and 13.
          </p>
        </section>
        <section className='pb-10'>
          {data &&
            data.data.map((impact, index) => (
              <div key={index}>
                {index % 2 == 0 ? (
                  <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[6.5em] w-full mb-7">
                    <div className="w-full bg-[#FCFCFC] mt-5 md:mt-0">
                      <Image src={impact.pic} width={400} height={400} alt={impact.title} className={"w-full mx-auto"}/>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-montserrat font-semibold text-xl md:text-[1.625em] leading-[4.0625em]">
                        {impact.title}
                      </h2>
                      <p className="font-quickSand text-2xl font-normal text-[#494949]">{impact.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row lg:gap-x-[6.5em] w-full mb-7">
                    <div className="flex flex-col">
                      <h2 className="font-montserrat font-semibold text-xl md:text-[1.625em] leading-[4.0625em]">
                        {impact.title}
                      </h2>
                      <p className="font-quickSand font-normal text-2xl text-[#494949]">{impact.description}</p>
                    </div>
                    <div className="w-full bg-[#FCFCFC] mt-5 md:mt-0">
                      <Image src={impact.pic} width={400} height={400} alt={impact.title} className={"w-full mx-auto"}/>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </section>
      </main>
    </>
  )
}

export default socialImpact
