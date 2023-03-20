import Image from 'next/image'
import data from '../data/affiliates.json'

export const Affiliates = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-y-10'>
      {data &&
        data.data.map((client, index) => (
          <div key={index}>
            <Image src={client} width={206} height={206} alt={client} loading="lazy" />
          </div>
        ))}
    </div>
  )
}
