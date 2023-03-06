import { MouseEventHandler } from "react"
import { Collapse } from "react-collapse"

type AccordionProps = {
    open: boolean
    toggle: MouseEventHandler
  title: string
  description: string
}

export const AccordionItem = ({ open, toggle, title, description }: AccordionProps) => {
  return (
    <div onClick={toggle}>
      <div className="">
      <h3>{title}</h3>
      
        { open ? "" : ""}
      </div>
      <Collapse isOpened={open}>
        <p>{description}</p>
      </Collapse>
    </div>
  )
}
