import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { FaBars } from 'react-icons/fa'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  return (
    <nav className="fixed z-20 bg-white w-full font-quickSand shadow-sm pb-2">
      <div className="w-full">
        <div className="flex items-center h-auto w-full">
          <div className="flex items-center mt-10 mx-5 md:mx-10 md:mt-[1.125em] md:ml-[3.125em] md:mr-24 font-medium text-xl text-[#3A3A3A] justify-between w-full">
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
            <div className="hidden lg:block">
              <ul className="flex ml-10 items-center gap-x-10 text-gray-500">
                <li className="list-none transition hover:list-disc hover:text-[#428821]">
                  <Link
                    href="/about"
                    className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                  >
                    About Us
                  </Link>
                </li>
                <Menu as={'div'} className="relative">
                  <li className="list-none transition hover:list-disc hover:text-[#428821]">
                    <Menu.Button className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]">
                      <span className="sr-only">Impact dropdown menu</span>
                      <span className="flex items-center gap-3">
                        <p>Our Impact</p>
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7101 1.21001C13.6171 1.11628 13.5065 1.04189 13.3846 0.991122C13.2628 0.940353 13.1321 0.914215 13.0001 0.914215C12.868 0.914215 12.7373 0.940353 12.6155 0.991122C12.4936 1.04189 12.383 1.11628 12.2901 1.21001L7.71006 5.79001C7.6171 5.88374 7.5065 5.95814 7.38464 6.0089C7.26278 6.05967 7.13207 6.08581 7.00006 6.08581C6.86805 6.08581 6.73734 6.05967 6.61548 6.0089C6.49362 5.95814 6.38302 5.88374 6.29006 5.79001L1.71006 1.21001C1.6171 1.11628 1.5065 1.04189 1.38464 0.991122C1.26278 0.940353 1.13207 0.914215 1.00006 0.914215C0.868048 0.914215 0.737342 0.940353 0.615483 0.991122C0.493624 1.04189 0.383023 1.11628 0.29006 1.21001C0.103809 1.39738 -0.000732422 1.65083 -0.000732422 1.91501C-0.000732422 2.1792 0.103809 2.43265 0.29006 2.62001L4.88006 7.21001C5.44256 7.77182 6.20506 8.08737 7.00006 8.08737C7.79506 8.08737 8.55756 7.77182 9.12006 7.21001L13.7101 2.62001C13.8963 2.43265 14.0009 2.1792 14.0009 1.91501C14.0009 1.65083 13.8963 1.39738 13.7101 1.21001Z"
                            fill="#428821"
                          />
                        </svg>
                      </span>
                    </Menu.Button>
                  </li>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transfrom opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="transfrom opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute origin-top-left flex flex-col left-0 mt-3 w-64 py-3 bg-[#FCFCFC] text-[#3A3A3A] shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${
                              active ? ' text-[#428821] bg-[#eae6e6]' : ''
                            }  w-full py-2`}
                          >
                            <Link
                              href="/impact/social"
                              className="transition flex items-center px-5 hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                            >
                              Social Impact
                            </Link>
                          </div>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${
                              active ? ' text-[#428821] bg-[#eae6e6]' : ''
                            }  w-full py-2`}
                          >
                            <Link
                              href="/impact/numbers"
                              className="transition flex items-center px-5 hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                            >
                              Impact in Numbers
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <li className="list-none transition hover:list-disc hover:text-[#428821]">
                  <Link
                    href="/solutions/technology"
                    className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                  >
                    Our Solutions
                  </Link>
                </li>
                <li className="list-none transition hover:list-disc hover:text-[#428821]">
                  <Link
                    href="/team"
                    className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                  >
                    Our Team
                  </Link>
                </li>
                <li className="list-none transition hover:list-disc hover:text-[#428821]">
                  <Link
                    href="/careers"
                    className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                  >
                    Careers
                  </Link>
                </li>

                <li className="list-none transition hover:list-disc hover:text-[#428821]">
                  <Link
                    href="/contact"
                    className="transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* mobile nav  */}
            <Menu as={'div'} className="mr-4 relative flex lg:hidden ">
              <Menu.Button className="bg-[#5C903D] inline-flex items-center rounded-md justify-center p-2 text-white hover:bg-[#3D3938] focus:outline-none focus:ring-white">
                <span className="sr-only">Open mobile menu</span>
                <FaBars className="w-5" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transfrom opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transfrom opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute origin-top-right flex flex-col right-0 mt-10 w-56 py-3 bg-gray-50 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? ' text-[#428821] bg-gray-200' : ''
                        }  w-full py-2`}
                      >
                        <Link href="/about">
                          <div className="flex items-center transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821] px-5">
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
                          active ? ' text-[#428821] bg-gray-200' : ''
                        }  w-full py-2`}
                      >
                        <Link href="impact/social">
                          <div className="flex items-center transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821] px-5">
                            <span>Impact</span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? ' text-[#428821] bg-gray-200' : ''
                        }  w-full py-2`}
                      >
                        <Link href="/team">
                          <div className="flex items-center transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821] px-5">
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
                          active ? ' text-[#428821] bg-gray-200' : ''
                        }  w-full py-2`}
                      >
                        <Link href="/solutions/technology">
                          <div className="flex items-center transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821] px-5">
                            <span>Our Solutions</span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? ' text-[#428821] bg-gray-200' : ''
                        }  w-full py-2`}
                      >
                        <Link href="/careers">
                          <div className="flex items-center transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821] px-5">
                            <span>Careers</span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? ' text-[#428821] bg-gray-200' : ''
                        }  w-full py-2`}
                      >
                        <Link href="/contact">
                          <div className="flex items-center transition hover:text-[#428821] hover:font-semibold active:font-semibold active:text-[#428821] focus:font-semibold focus:text-[#428821] px-5">
                            <span>Contact Us</span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
}
