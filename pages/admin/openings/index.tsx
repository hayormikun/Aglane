import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { HtmlHead } from '../../../components/Head'
import { Loading } from '../../../components/Loading'
import { IOpenings } from '../../../interfaces/IOpenings'
import { HrMenu } from '../menu'

const fetchOpenings = async () => {
  const res = await fetch('http://localhost:5000/api/v1/openings')
  const data = await res.json()
  return data
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery<IOpenings>('openings')

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Index = () => {
  const { status, data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/api/auth/signin')
  }, [status, router])

  const { data: openings, isLoading, isError, error } = useQuery(
    'opening',
    fetchOpenings,
  )
  
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (isError) {
    return alert(error)
  }


  if (status === 'authenticated' && session) {
    return (
      <>
        <HtmlHead title="Current Openings" />
        <main
          className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12"
          id="greenBackground"
        >
          <div className="flex flex-col-reverse md:flex-row mx-auto">
            <div className="w-full md:w-[80%] mx-auto">
              <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
                Current Openings
              </h1>
              <div className="flex flex-col gap-3">
                
                  {openings && openings.map((opening:IOpenings)=>(
                    <div key={opening.id} className="flex justify-between w-full bg-white p-3 items-center gap-3">
                    <div className="flex flex-col font-quickSand">
                      <h3 className="font-semibold text-xl mb-3">
                        {opening.designation}
                      </h3>
                      <span className="font-light text-sm">1 week ago</span>
                    </div>
                    <span className="">{opening.mode}</span>
                    <span className="">{opening.location}</span>
                    <div className="flex flex-col gap-3">
                      <span className='bg-[#428821] text-white p-3 rounded-lg'>
                        <FaTrashAlt className="h-3 w-3" />
                      </span>
                      <span className='bg-[#428821] text-white p-3 rounded-lg'>
                        <FaPencilAlt className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                  )) }
              </div>
            </div>
            <div className="mb-5 md:w-[18%] mx-auto">
              <HrMenu />
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Index
