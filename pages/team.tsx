import React from 'react'
import data from '../data/team.json'
import { HtmlHead } from '../components/Head'
import { Heading } from '../components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import { Gallery } from '../components/Sliders'

const Team = () => {
  return (
    <>
      <HtmlHead title="Meet the Team" />
      <main className="pt-40 px-3 lg:px-[3.125rem] mb-0 w-full h-full">
        <section>
          <Heading header="Management" />

          <div className="flex flex-wrap w-full gap-x-2 lg:gap-x-24 gap-y-14">
            {data &&
              data.management.map((staff, index) => (
                <div
                  className="flex flex-col w-fit lg:w-[22.5rem] mx-auto text-center"
                  key={index}
                >
                  <Image
                    src={staff.pic}
                    width={360}
                    height={360}
                    alt={staff.name}
                    className="mb-4"
                  />
                  <span className="font-montserrat font-semibold text-3xl text-[#3A3A3A]">
                    {staff.name}
                  </span>
                  <span className="font-quickSand font-medium text-xl text-[#428821]">
                    {staff.designation}
                  </span>
                </div>
              ))}
          </div>
        </section>

        {/* <section>
          <Heading header="Gallery" />
          <Gallery />
        </section> */}

        <section className="mt-10 pb-[4.375em]">
          <Heading header="JOIN OUR COMMUNITY" />

          <div className="flex flex-col w-full md:flex-row mt-[0.625em]">
            {data &&
              data.links.map((link, index) => (
                <div key={index} className="md:w-[50%]">
                  <Link
                    target="_blank"
                    href={link.link}
                    className="flex flex-row mb-5 mr-[3.125em]"
                  >
                    <div className="flex flex-row px-5 hover:text-[#428821] font-normal hover:font-medium bg-[#FCFCFC] border hover:border-2 border-[#D5D5D5] hover:border-[#428821] transition-all rounded-lg items-center justify-center min-w-full max-w-[35.3125rem] lg:w-[35.3125rem] h-20">
                      <h3 className="font-montserrat mr-[1.875em]">
                        {link.title}
                      </h3>

                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_343_504)">
                          <path
                            d="M4.98052 0.117188C2.81255 0.580078 1.01958 2.17383 0.316458 4.25391C-0.0116667 5.24414 5.20833e-05 4.79297 5.20833e-05 15C5.20833e-05 25.207 -0.0116667 24.7559 0.316458 25.7461C1.03716 27.8789 2.89458 29.4844 5.14458 29.918C5.78911 30.041 24.211 30.041 24.8555 29.918C26.086 29.6836 27.1524 29.1387 28.0489 28.2773C28.9395 27.4336 29.4844 26.502 29.8418 25.2246C29.9708 24.7559 29.9708 24.7324 29.9708 19.916V15.0762L29.8067 14.8652C29.584 14.5723 29.3321 14.4551 28.9454 14.4551C28.5586 14.4551 28.3067 14.5723 28.084 14.8652L27.92 15.0762L27.8848 19.6816C27.8497 24.7852 27.8614 24.6094 27.4512 25.459C27.0411 26.3203 26.3731 26.9941 25.5001 27.4336C24.586 27.8906 25.2891 27.8613 14.9708 27.8613C6.39849 27.8613 5.74224 27.8555 5.3731 27.7559C3.8438 27.3691 2.71294 26.2676 2.27349 24.7559L2.13872 24.2871V15V5.71289L2.27349 5.24414C2.63091 4.01953 3.43951 3.05859 4.55279 2.54297C5.41411 2.13867 5.23247 2.15039 10.254 2.11523C14.7012 2.08008 14.8008 2.08008 15.0001 1.95703C15.6387 1.58203 15.6211 0.503906 14.9708 0.134766L14.7364 0L10.1075 0.00585938C5.85943 0.00585938 5.43755 0.0175781 4.98052 0.117188Z"
                            fill="#428821"
                          />
                          <path
                            d="M20.3321 0.123104C19.7637 0.451229 19.629 1.25396 20.0567 1.74029C20.3848 2.11529 20.3262 2.10943 23.4786 2.10943H26.3379L19.9688 8.47857C15.4688 12.9844 13.5704 14.918 13.5059 15.0704C13.3477 15.4571 13.4297 15.9493 13.6993 16.254C13.9629 16.5469 14.5254 16.6583 14.9297 16.4942C15.0821 16.4297 17.0157 14.5313 21.5215 10.0313L27.8907 3.66217V6.52154C27.8907 9.67389 27.8848 9.61529 28.2598 9.94342C28.752 10.377 29.5606 10.2305 29.8829 9.65631C30.0001 9.44537 30.0001 9.39849 29.9883 5.0274L29.9708 0.603573L29.8126 0.398495C29.4903 -0.0175209 29.7422 5.72205e-05 24.8907 5.72205e-05C20.6133 5.72205e-05 20.5313 0.0059166 20.3321 0.123104Z"
                            fill="#428821"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_343_504">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Team
