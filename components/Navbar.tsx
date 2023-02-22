import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assests/AgLane_Logo.png'
import { Menu } from '@headlessui/react'
import { FaBars } from "react-icons/fa"


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
      <nav className="fixed z-20 bg-white w-full font-nunito">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-10 md:mx-20 justify-between w-full">
              {/* brand Name */}
              <div className="flex justify-center items-center flex-shrink-0">
                <Link href="/">
                <Image src={logo} alt="Aglane logo" width={100} height={80} />
                </Link>
               
              </div>

              {/* links */}
              <div className="hidden md:block">
                <div className="flex ml-10 items-baseline space-x-4 text-gray-500">
                  <Link href="/about">About Us</Link>
                  <Link href="/products">Products</Link>
                  <Link href="/team">Our Team</Link>
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>

              {/* mobile nav  */}
              <Menu as={'div'} className="mr-14 relative flex md:hidden ">
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
              </Menu>
            </div>
          </div>
        </div>
      </nav>
  )
}
