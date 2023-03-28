import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
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
        <HtmlHead title="Messages" />
        <main
          className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12 text-white"
          id="greenBackground"
        >
          <div className="flex flex-row mx-auto">
            <section className="md:w-[80%] mx-auto">
              <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
                All Messages
              </h1>

              <div className="flex flex-wrap gap-3 w-full text-[#494949] font-quickSand">
                <div className="flex flex-col bg-[#EFEDFB] relative rounded-lg w-full p-3 lg:w-[15.625rem] h-auto">
                  <div className="absolute right-3 bg-white p-2 cursor-pointer tracking-wider shadow">
                    <FaTrashAlt />
                  </div>
                  <div className="message text-ellipsis overflow-y-hidden ... h-24 m-5 w-fit font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium cumque pariatur enim voluptates? Facere a,
                    repellendus qui ipsa molestiae ex ea expedita corrupti,
                    quia, pariatur possimus omnis consequuntur ipsum mollitia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit ab accusamus id expedita dolorem iure, ducimus vero. Aperiam magni ipsum distinctio saepe quasi? Ipsum quisquam consectetur et sequi placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione, maxime ut accusantium ea doloremque iste eum ad nisi non deserunt aliquid quas sapiente at saepe repellat recusandae. Voluptatem, repellat? Molestias nemo voluptates a necessitatibus ex veritatis animi reiciendis non neque. Qui iste autem ab odit tenetur itaque repudiandae similique unde ipsum?
                  </div>
                  
                  <span className='mx-5 pt-2 border-t-2 border-gray-400 font-medium'> Favour Akomolafe</span>
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
}

export default Index
