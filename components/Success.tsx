import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

type SuccessProp = {
  item: string
}

export const Success = ({ item }: SuccessProp) => {
  const [isopen, setIsopen] = useState(true)

  return (
    <div
      onClick={() => {
        setIsopen(false)
      }}
      className={
        isopen
          ? 'bg-green-500 text-center text-white font-light text-md p-5 w-full h-fit flex items-center hover:cursor-pointer'
          : 'hidden'
      }
    >
      <FaCheckCircle className="w-10 md:w-5 mr-2" />

      <p>{item} was sent succesfully </p>
    </div>
  )
}
