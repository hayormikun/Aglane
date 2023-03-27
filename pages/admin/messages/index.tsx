import { HtmlHead } from '../../../components/Head'
import { HrMenu } from '../menu'

const Index = () => {
  return (
    <>
      <HtmlHead title="Current Openings" />
      <main
        className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12 text-white"
        id="greenBackground"
      >
        <div className="flex flex-row mx-auto">
          <section className="md:w-[80%] mx-auto">
            <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
              All Messages
            </h1>

            <div className="flex flex-wrap gap-3 w-full">
              <div className="flex flex-col border-2 border-white rounded-lg p-3 w-fit lg:w-[16.625rem]  overflow-clip">
                <div className="message">
                  whats up doe
                </div>
                <span className="fullname">favour akomolafe</span>
              </div>
            </div>
          </section>
          <div className="md:w-[15%] mx-auto">
            <HrMenu />
          </div>
        </div>
      </main>
    </>
  )
}

export default Index
