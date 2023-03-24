import { useState } from 'react'
import { number } from 'yup'
import { HtmlHead } from '../../components/Head'
import { Heading } from '../../components/Heading'
import data from '../../data/stateImpacts.json'

const Numbers = () => {
  const [show, setShow] = useState(false)
  const [hovered, setHovered] = useState<null | number>(null)

  return (
    <>
      <HtmlHead title="Impact in Numbers" />
      <main className="pt-40 px-3 lg:px-[3.125em] mb-0 w-full h-full text-[#3A3A3A]">
        <Heading header="Impact in Figures" />

        <div className="w-full">
          <ul className="flex flex-col gap-y-5 w-fit text-xl md:text-2xl font-quickSand font-medium">
            <li>Farmers Engaged 73,769+</li>
            <li>Hectares Cultivated 81,246+</li>
            <li>Commodities produced and traded in MT 171,465+</li>
            <li>Jobs Created 727+</li>
            <li>Communities Impacted 32+</li>
            <li>
              Commodities produced and traded: Wheat, Soybeans, Rice, Maize,
              Cassava, Melon
            </li>
          </ul>
        </div>

        <section className="mt-10 pb-48 w-full">
          <Heading header="Impact in Figures" />
          <p className="font-quickSand font-medium text-xl md:text-2xl w-fit mb-10">
            States we have impacted:{' '}
          </p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-y-5">
            {data &&
              data.data.map((state, index) => (
                <div
                  onMouseEnter={(e) => setHovered(index)}
                  onMouseLeave={(e) => setHovered(null)}
                  style={{ background: state.color}}
                  key={index}
                  className="flex items-center justify-center hover:cursor-pointer w-full rounded-2xl h-20 font-light text-sm md:text-2xl text-white"
                >
                  <span className="relative">
                    {state.state}

                    {hovered === index &&
                      (index % 2 == 0 ? (
                        <div className="absolute left-0 z-20 w-64 md:w-[30rem] h-full">
                          <ul className="bg-[#FCFCFC] p-5 shadow-md rounded-2xl text-[#3A3A3A] text-sm md:text-xl font-light">
                            <li>Registered Farmers: {state.farmers}</li>
                            <li>
                              Commodities produced and traded in tons:{' '}
                              {state.produced}
                            </li>
                            <li>Hectares cultivated: {state.hectares}</li>
                            <li>Commodities: {state.commodities}</li>
                            <li>Job created: {state.jobs}</li>
                            <li>Communities: {state.communities}</li>
                          </ul>
                        </div>
                      ) : (
                        <div className="absolute right-0 z-20 w-64 md:w-[30rem] h-full">
                          <ul className="bg-[#FCFCFC] p-5 shadow-md rounded-2xl text-[#3A3A3A] text-sm md:text-xl font-light">
                            <li>Registered Farmers: {state.farmers}</li>
                            <li>
                              Commodities produced and traded in tons:{' '}
                              {state.produced}
                            </li>
                            <li>Hectares cultivated: {state.hectares}</li>
                            <li>Commodities: {state.commodities}</li>
                            <li>Job created: {state.jobs}</li>
                            <li>Communities: {state.communities}</li>
                          </ul>
                        </div>
                      ))}
                  </span>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Numbers
