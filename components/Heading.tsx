import React from 'react'

type HeadingProps = {
    header: string
}

export const Heading = ({header}: HeadingProps) => {
  return (
    <h2 className='text-3xl mx-auto font-montserrat font-semibold text-[#3A3A3A] uppercase w-full mb-[1.875rem]'>
        {header}
    </h2>
  )
}

export const FooterHeading =  ({header}: HeadingProps) => {
  return (
    <h3 className='text-2xl mx-auto leading-[1.875em] font-montserrat font-semibold text-[#3A3A3A] w-auto mb-[1.25rem]'>
        {header}
    </h3>
  )
}

export const SmallHeader = ({header}: HeadingProps) => {
  return (
    <span className='text-xl font-montserrat font-semibold text-[#3A3A3A] w-auto mb-[0.625rem]'>
      {header}
    </span>
  )
}
