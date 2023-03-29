import Image from 'next/image'
import Link from 'next/link'

const menu = () => {
  return <div>menu</div>
}

export default menu

export const HrMenu = () => {
  const navItems = [
    {
      name: 'messages',
      link: '/messages',
      svg: '/assests/SVGs/menu/message.svg',
    },
    {
      name: 'openings',
      link: '/openings',
      svg: '/assests/SVGs/menu/opening.svg',
    },
    {
      name: 'create openings',
      link: '/openings/create',
      svg: '/assests/SVGs/menu/create.svg',
    },
  ]

  return (
    <aside className="bg-[#EFEDFB] w-full h-fit p-5 rounded-lg">
      <ul className="flex md:flex-col gap-5">
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className="transition capitalize text-[#3A3A3A] hover:text-[#428821] font-montserrat hover:font-semibold"
          >
            <Link href={`/admin/${navItem.link}`} className="flex gap-2">
              <Image
                src={navItem.svg}
                width={24}
                height={24}
                alt={navItem.name}
              />
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export const PostMenu = () => {
  const navItems = [
    {
      name: 'all posts',
      link: '/posts',
      svg: '/assests/SVGs/menu/blog.svg',
    },
    {
      name: 'create posts',
      link: '/posts/create',
      svg: '/assests/SVGs/menu/create.svg',
    },
  ]

  return (
    <aside className="bg-[#FCF6E7] w-full h-fit p-5 rounded-lg">
      <ul className="flex flex-col gap-5">
        {navItems.map((navItem, index) => (
          <li
          key={index}
          className="transition capitalize text-[#3A3A3A] hover:text-[#428821] font-montserrat hover:font-semibold"
        >
            <Link
              href={`/admin/${navItem.link}`}
              className="flex gap-2"
            >
              <Image
                src={navItem.svg}
                width={24}
                height={24}
                alt={navItem.name}
              />
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
