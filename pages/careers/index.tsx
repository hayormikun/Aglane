import { HtmlHead } from '../../components/Head'
import { Heading, MidHeading } from '../../components/Heading'
import { Opening } from '../../components/Opening'

const index = () => {
  return (
    <>
      <HtmlHead title="Careers" />
      <main className="pt-40 px-[3.125em] mb-0 w-full h-full color-[#3A3A3A]">
        <Heading header="Careers at Aglane" />
        <p className="font-quickSand text-2xl text-[#3A3A3A] pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <section>
            <div className='border-b border-[#D5D5D5] w-full mb-2'>
                <MidHeading header='Current Openings'/>
            </div>
            <Opening designation='Public Relations Specialist' jobType='remote' location='abuja, nigeria' staffType='contract' />
        </section>
      </main>
    </>
  )
}

export default index
