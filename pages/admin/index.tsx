import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Index = () => {
  const { status, data: session } = useSession()
  const router = useRouter()
  
  useEffect(()=>{
    if (status === 'unauthenticated')
    router.replace('/api/auth/signin')
  }, [status, router])

  if (status === 'authenticated' && session) {

    return (
      <main className="flex flex-wrap gap-10 justify-center items-center h-screen w-screen">
        <Link href={'/admin/messages'} className='w-40 h-40 bg-[#428821] text-white pl-3 pt-2 text-3xl font-montserrat font-semibold'>
          HR
        </Link>
        {/* <Link href={'/admin/posts'} className='w-40 h-40 bg-[#dbc68f] text-white pl-3 pt-2 text-3xl font-montserrat font-semibold'>
          MEDIA
        </Link> */}
      </main>
    )
  }
}

export default Index
