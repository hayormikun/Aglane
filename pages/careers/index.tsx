import { HtmlHead } from '../../components/Head'
import { Heading, MidHeading } from '../../components/Heading'
import { Opening } from '../../components/Opening'

const index = () => {
  return (
    <>
      <HtmlHead title="Careers" />
      <main className="pt-40 px-3 lg:px-[6.25rem] mb-0 w-full min-h-screen color-[#3A3A3A]">
        <Heading header="CAREERS - Build your Career with AgLane!" />
        <p className="font-quickSand text-xl text-[#3A3A3A] pb-10">
          Aglane creates an opportunity for impact as an intern, graduate or a
          professional. Our diversity and inclusive community drive superior
          business results to build an excellent brand. Together, let’s create
          positive, long-lasting value.
        </p>

        <section>
          <div className="w-full mb-2">
            <MidHeading header="Current Openings" />
          </div>
          <div className="flex flex-col gap-5 pb-20">
            <Opening
              designation="Finance Officer"
              mode="on-site"
              location="Abuja"
              appointment="Full-time"
              link="https://ng.indeed.com/job/finance-officer-ed5203e575047570?_ga=2.145256560.573211784.1679914999-849307790.1667566874"
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default index
