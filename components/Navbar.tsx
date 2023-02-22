import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between align-middle h-auto w-full px-5'>
        <Link href='/' >
          
        </Link>

        <ul className='flex flex-row'>
            <li>About Us</li>
            <li>Products/Projects</li>
            <li>Our Team</li>
            <li>Contact Us</li>
        </ul>    
        </nav>
  )
}
