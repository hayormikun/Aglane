import { HtmlHead } from '../components/Head'
import { useState } from 'react'
import { Heading } from '../components/Heading'
import { Testimonials } from '../components/Sliders'
import data from '../data/services.json'
import Image from 'next/image'
import Link from 'next/link'
import { Affiliates } from '../components/Affiliates'
import { useSession } from 'next-auth/react'

export default function Home() {
  const [open, setOpen] = useState<number | boolean>(false)

  const toggle = (index: number) => {
    if (open === index) return setOpen(false)
    setOpen(index)
  }

  return (
    <>
      <HtmlHead title="Building Sustainable Food Systems Across Sub-Saharan Africa" />
      <main className="pt-[7rem] mb-0 w-full h-full">
        <section id="homeCaption">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-0 pt-[3.125em] pb-[4.8125em]">
            <div className="col-span-1 flex-col mx-[3.125em]">
              <p className="font-montserrat font-bold text-white text-2xl md:text-5xl md:leading-[4.0625rem]">
                Building Sustainable Food Systems Across Sub-Saharan Africa
              </p>
              <Link
                href={'/about'}
                className="flex flex-row mt-7 md:mt-[3.75em] w-fit md:w-[15.875rem] pl-5 pr-20 md:px-[1.8725rem] h-14 md:h-20 bg-[#428821] hover:bg-[#346c1a] hover:cursor-pointer rounded-[0.625em] justify-start items-center"
              >
                <span className="text-white font-lexand font-normal text-xl md:text-2xl mr-5 md:mr-[1.8725rem]">
                  Learn More
                </span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_397_639)">
                    <path
                      d="M28.9 12.3875L24.0625 7.5C23.9463 7.38284 23.808 7.28985 23.6557 7.22639C23.5034 7.16293 23.34 7.13025 23.175 7.13025C23.01 7.13025 22.8466 7.16293 22.6943 7.22639C22.542 7.28985 22.4037 7.38284 22.2875 7.5C22.1703 7.61621 22.0773 7.75446 22.0139 7.90678C21.9504 8.05911 21.9178 8.22249 21.9178 8.3875C21.9178 8.55252 21.9504 8.7159 22.0139 8.86822C22.0773 9.02055 22.1703 9.1588 22.2875 9.275L26.7375 13.75H1.25C0.918477 13.75 0.600533 13.8817 0.366113 14.1161C0.131692 14.3505 -2.62229e-06 14.6685 -2.62229e-06 15C-2.62229e-06 15.3315 0.131692 15.6495 0.366113 15.8839C0.600533 16.1183 0.918477 16.25 1.25 16.25H26.8125L22.2875 20.775C22.0659 21.0075 21.9423 21.3163 21.9423 21.6375C21.9423 21.9587 22.0659 22.2675 22.2875 22.5C22.4037 22.6172 22.542 22.7102 22.6943 22.7736C22.8466 22.8371 23.01 22.8698 23.175 22.8698C23.34 22.8698 23.5034 22.8371 23.6557 22.7736C23.808 22.7102 23.9463 22.6172 24.0625 22.5L28.9 17.6875C29.6023 16.9844 29.9967 16.0313 29.9967 15.0375C29.9967 14.0437 29.6023 13.0906 28.9 12.3875Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_397_639">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="matrix(-1 0 0 -1 30 30)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <div className="px-3 md:px-[4.375rem] w-full">
          <section className="mt-[1.875rem] pt-12">
            <Heading header={'What we do'} />
            <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-4 md:gap-[3.125em] mb-10">
              {data &&
                data.primary.map((service, index) => (
                  <div
                    className="flex flex-col col-span-1 text-center bg-white border border-[#D5D5D5] rounded-[20px] pt-5 pb-[0.625em] md:px-[2.8125em]"
                    key={index}
                  >
                    <span className="flex justify-center mb-3">
                      <Image
                        src={service.icon}
                        width={100}
                        height={100}
                        alt={service.title}
                        loading="lazy"
                        className=''
                      />
                    </span>
                    <span className="m-auto w-auto text-[#3A3A3A]">
                      {service.title}
                    </span>
                  </div>
                ))}
            </div>
            <div className="mx-[2rem] font-normal font-quickSand md:text-2xl md:leading-10">
              <h3 className="mb-5 text-[#494949]">
                In addition Aglane provides the following services
              </h3>
              <ul>
                {data &&
                  data.additional.map((val, index) => (
                    <li className="list-disc pl-5 mb-5 text-[#494949]" key={index}>
                      {val}
                    </li>
                  ))}
              </ul>
            </div>
          </section>

          <section className="mt-[1.875rem] pt-12">
            <Heading header={'Testimonials'} />
            <Testimonials />
          </section>

          <section className="mt-[1.875rem] pt-12 pb-10">
            <Heading header={'Clients and affiliates'} />

            <Affiliates />
          </section>
        </div>
      </main>
    </>
  )
}
