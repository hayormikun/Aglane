import React from 'react'

type HeadingProps = {
    header: string
}

export const Heading = ({header}: HeadingProps) => {
  return (
    <h1 className='text-3xl mx-auto font-montserrat font-semibold text-[#3A3A3A] uppercase w-full mb-[1.875rem]'>
        {header}
    </h1>
  )
}

export const MidHeading =  ({header}: HeadingProps) => {
  return (
    <h2 className='text-2xl mx-auto leading-[1.875em] font-montserrat font-semibold text-[#3A3A3A] w-auto mb-[1.25rem]'>
        {header}
    </h2>
  )
}

export const SmallHeader = ({header}: HeadingProps) => {
  return (
    <span className='text-xl font-montserrat font-semibold text-[#3A3A3A] w-auto mb-[0.625rem]'>
      {header}
    </span>
  )
}
