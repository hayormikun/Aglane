import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {
  const { status, data: session } = useSession()
  const router = useRouter()

  console.log(session)
  return (
    <div className="py-56" onClick={() => signOut()}>
      {session ? (
        <button> Log Out</button>
      ) : (
        <button onClick={() => router.push('/api/auth/signin')}>Log In</button>
      )}
    </div>
  )
}

export default Index
