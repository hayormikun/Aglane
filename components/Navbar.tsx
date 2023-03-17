import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { FaBars } from 'react-icons/fa'

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
                <Image
                  src={'/assests/AgLane_Logo.png'}
                  alt="Aglane logo"
                  width={204}
                  height={80}
                />
              </Link>
            </div>
            {/* links */}
            <div className="hidden md:block">
              <div className="flex ml-10 items-center gap-x-10 text-gray-500">
                {/* <Link
                  href="/about"
                  className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                >
                  About Us
                </Link>
                <Link
                  href="/impact/social"
                  className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                >
                  Our Impact
                </Link> */}
                <Link
                  href="/solutions/technology"
                  className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                >
                  Our Solutions
                </Link>
                <Link
                  href="/team"
                  className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                >
                  Our Team
                </Link>
                <Link
                  href="/careers/"
                  className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                >
                  Careers
                </Link>
                {/* <Link
                  href="/contact"
                  className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                >
                  Contact Us
                </Link> */}
              </div>
            </div>

            {/* mobile nav  */}
            {/* <Menu as={'div'} className="mr-14 relative flex md:hidden ">
              <Menu.Button
                className="bg-[#5C903D] inline-flex items-center rounded-md justify-center p-2 text-white hover:bg-[#3D3938] focus:outline-none focus:ring-white"
                onClick={handleClick}
              >
                <span className="sr-only">Open mobile menu</span>
                <FaBars className="w-5" aria-hidden="true" />
              </Menu.Button>

              <Menu.Items className="absolute origin-top-right flex flex-col right-0 mt-10 w-56 py-3 bg-gray-50 text-gray-400 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link href="about">
                        <div className="flex items-center px-5">
                          <span>About Us</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link href="products">
                        <div className="flex items-center px-5">
                          <span>Products</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link href="team">
                        <div className="flex items-center px-5">
                          <span>Our Team</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? ' text-blue-400 bg-gray-200' : ''
                      }  w-full py-2`}
                    >
                      <Link href="contact">
                        <div className="flex items-center px-5">
                          <span>Contact Us</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
