import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HtmlHead } from '../../../components/Head'
import { PostMenu } from '../menu'

const Index = () => {
  const { status, data: session } = useSession()
  const router = useRouter()
  
  useEffect(()=>{
    if (status === 'unauthenticated')
    router.replace('/api/auth/signin')
  }, [status, router])

  if (status === 'authenticated' && session) {
  return (
   
      <>
        <HtmlHead title="All Posts" />
        <main
          className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12"
          id="greenBackground"
        >
          <div className="flex flex-row mx-auto">
            <div className="md:w-[80%] mx-auto">
              <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
                All Posts
              </h1>
            </div>
            <div className="md:w-[15%] mx-auto">
              <PostMenu />
            </div>
          </div>
        </main>
      </>
    
  )
  }
}

export default Index
