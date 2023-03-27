import { signOut, useSession } from 'next-auth/react'
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
      <div className="py-56" onClick={() => signOut()}>
        {session ? (
          <button> Log Out</button>
        ) : (
          <button onClick={() => router.replace('/api/auth/signin')}>
            Log In
          </button>
        )}
      </div>
    )
  }
}

export default Index
