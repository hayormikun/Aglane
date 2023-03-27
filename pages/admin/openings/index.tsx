import { HtmlHead } from '../../../components/Head'
import { HrMenu } from '../menu'

const Index = () => {
  return (
   
      <>
        <HtmlHead title="Current Openings" />
        <main
          className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12"
          id="greenBackground"
        >
          <div className="flex flex-row mx-auto">
            <div className="md:w-[50%] mx-auto">
              <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
                Current Openings
              </h1>
              <div className='flex flex-wrap'>
                <div className="message">

                </div>
                <span className='fullname'>

                </span>
              </div>
            </div>
            <div className="md:w-[40%] mx-auto">
              <HrMenu />
            </div>
          </div>
        </main>
      </>
    
  )
}

export default Index
