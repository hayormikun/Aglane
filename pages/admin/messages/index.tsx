import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { HtmlHead } from '../../../components/Head'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { HrMenu } from '../menu'
import { IMessages } from '../../../interfaces/IMessages'
import { Loading } from '../../../components/Loading'

const fetchMessages = async () => {
  const res = await fetch('http://localhost:5000/api/v1/messages')
  const data = await res.json()
  return data
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery<IMessages>('messages')

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

  const { data: messages, isLoading, isError, error } = useQuery(
    'message',
    fetchMessages,
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
        <HtmlHead title="Messages" />
        <main
          className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12 text-white"
          id="greenBackground"
        >
          <div className="flex flex-col-reverse md:flex-row mx-auto">
            <section className="md:w-[80%] mx-auto">
              <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
                All Messages
              </h1>

              <div className="flex flex-wrap gap-3 w-full text-[#494949] font-quickSand">
                {messages &&
                  messages.map((message: IMessages) => (
                    <div
                      key={message.id}
                      className="flex flex-col bg-[#EFEDFB] relative rounded-lg w-full p-3 lg:w-[15.625rem] h-auto"
                    >
                      <div className="absolute right-3 bg-white text-[#428821] p-2 cursor-pointer tracking-wider shadow">
                        <FaTrashAlt />
                      </div>
                      <div className="message text-ellipsis overflow-y-hidden ... h-24 m-5 w-fit font-normal">
                        {message.message}
                      </div>

                      <span className="mx-5 pt-2 border-t-2 border-gray-400 font-medium">
                        {' '}
                        {message.name}
                      </span>
                    </div>
                  ))}
              </div>
            </section>
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
