import Link from "next/link"

export const HrMenu = () => {
    const navItems = [
        {
            name: "dashboard",
            link: "/messages",
        },
        {
            name: "openings",
            link: "/openings",
        },
        {
            name: "create openings",
            link: "/openings/create",
        },
    ]

  return (
    <aside className="bg-[#D5D5D5] w-full h-fit p-5 rounded-lg">
      <ul className="flex flex-col gap-5">
        {
            navItems.map((navItem, index) =>(
                <li key={index} className="transition text-[#3A3A3A]">
                    <Link href={`/admin/${navItem.link}`} className="hover:pb-2 hover:border-b-2 hover:border-[#428821]">
                        {navItem.name}
                    </Link>
                </li>
            ))
        }
      </ul>
    </aside>
  )
}

export const PostMenu = () => {
    const navItems = [
        {
            name: "dashboard",
            link: "/posts",
        },
        {
            name: "create posts",
            link: "/posts/create",
        },
    ]

  return (
    <aside className="bg-[#D5D5D5] w-full h-fit p-5 rounded-lg">
      <ul className="flex flex-col gap-5">
        {
            navItems.map((navItem, index) =>(
                <li key={index} className="transition text-[#3A3A3A]">
                    <Link href={`/admin/${navItem.link}`} className="hover:pb-2 hover:border-b-2 hover:border-[#428821]">
                        {navItem.name}
                    </Link>
                </li>
            ))
        }
      </ul>
    </aside>
  )
}
