import { HtmlHead } from '../../components/Head'
import { Heading, MidHeading } from '../../components/Heading'
import { Opening } from '../../components/Opening'

const index = () => {
  return (
    <>
      <HtmlHead title="Careers" />
      <main className="pt-40 px-3 lg:px-[6.25rem] mb-0 w-full h-full color-[#3A3A3A]">
        <Heading header="Careers at Aglane" />
        <p className="font-quickSand text-2xl text-[#3A3A3A] pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <section>
            <div className='w-full mb-2'>
                <MidHeading header='Current Openings'/>
            </div>
            <div className="flex flex-col gap-5 pb-20">
            <Opening designation='Public Relations Specialist' mode='remote' location='abuja, nigeria' appointment='contract' link='/' />
            <Opening designation='Public Relations Specialist' mode='remote' location='abuja, nigeria' appointment='contract' link='/' />
            </div>
        </section>
      </main>
    </>
  )
}

export default index
