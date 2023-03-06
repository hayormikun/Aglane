import Image from 'next/image'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import { HtmlHead } from '../components/Head'
import landingImage from '../public/assests/Images/pexels-safari-consoler-11588042.jpg'

export default function Home() {
  return (
    <>
      <HtmlHead title="Homepage" />
      <main className='pt-[11.875rem] mx-10 md:mx-[3.125em]'>
        <section className='grid grid-cols-2 gap-[3.125em]'>
          <div className='col-span-1 flex-col'>
            <p className='font-montserrat font-semibold text-5xl leading-[4.0625rem]'>
              Establishing beneficial and profitable partnerships with smallholder farmers in Nigeria.
            </p>
            <button className='flex flex-row mt-[3.75em] w-[15.875rem] px-[1.8725rem] h-20 bg-[#428821] hover:bg-[#346c1a] rounded-[0.625em] justify-start items-center'>
              <span className='text-white font-lexand font-normal text-2xl mr-[1.8725rem]'>Learn More</span>
              <FaArrowRight className='text-white h-[0.9375rem] w-[1.8725rem]' />
            </button>
          </div>
          <div className='col-span-1'>
            <Image src={landingImage} width={565} height={400} alt="" loading='lazy' placeholder='blur'/>
          </div>
        </section>

        <section>

        </section>
      </main>
    </>
  )
}
