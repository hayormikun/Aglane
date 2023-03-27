import { MouseEventHandler } from 'react'
import { Collapse } from 'react-collapse'

type AccordionProps = {
  open: boolean
  toggle: MouseEventHandler
  title: string
  description: string
  bg: string
}

export const AccordionItem = ({
  open,
  toggle,
  title,
  description,
  bg,
}: AccordionProps) => {
  return (
    <div className="pt-3">
      <div
        className="bg-white opacity-95 rounded-t-lg shadow py-5 px-10 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-3xl text-[#428821] font-montserrat font-medium">
          {title}
        </h3>

        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              fill="#428821"
            ></path>{' '}
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              fill="#428821"
            ></path>{' '}
          </svg>
        )}
      </div>
      <Collapse isOpened={open}>
        <p
          style={{ backgroundColor: bg }}
          className="px-10 py-5 text-xl text-[#3A3A3A] rounded-b-lg font-normal font-quickSand"
        >
          {description}
        </p>
      </Collapse>
    </div>
  )
}
