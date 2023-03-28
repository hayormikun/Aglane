import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaPenAlt, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { HtmlHead } from '../../../components/Head'
import { HrMenu } from '../menu'

const Index = () => {
  const { status, data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/api/auth/signin')
  }, [status, router])

  if (status === 'authenticated' && session) {
    return (
      <>
        <HtmlHead title="Current Openings" />
        <main
          className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12"
          id="greenBackground"
        >
          <div className="flex flex-row mx-auto">
            <div className="md:w-[80%] mx-auto">
              <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
                Current Openings
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between w-[70%] bg-white p-3 items-center gap-3">
                  <div className="flex flex-col font-quickSand">
                    <h3 className="font-semibold text-xl mb-3">
                      Finance officer
                    </h3>
                    <span className="font-light text-sm">1 week ago</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className='bg-[#428821] text-white p-3 rounded-lg'>
                      <FaTrashAlt className="h-5 w-5" />
                    </span>
                    <span className='bg-[#428821] text-white p-3 rounded-lg'>
                      <FaPencilAlt className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[15%] mx-auto">
              <HrMenu />
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Index
