import React from 'react'

type HeadingProps = {
    header: string
}

export const Heading = ({header}: HeadingProps) => {
  return (
    <h1>
        {header}
    </h1>
  )
}
