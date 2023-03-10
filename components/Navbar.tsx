import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { FaBars } from "react-icons/fa"


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
      <nav className="fixed z-20 bg-white w-full font-quickSand shadow-sm pb-2 opacity-90">
        <div className="w-full">
          <div className="flex items-center h-auto w-full">
            <div className="flex items-center mt-10 mx-10 md:mt-[1.125em] md:ml-[3.125em] md:mr-24 font-medium text-xl text-[#3A3A3A] justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <Link href="/">
                <Image src={'/assests/AgLane_Logo.png'} alt="Aglane logo" width={204} height={80} />
                </Link>
               
              </div>
              {/* links */}
             
            </div>
          </div>
        </div>
      </nav>
  )
}
