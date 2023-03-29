import React from 'react'

export const TargetedSdgs = () => {
  return (
    <div className='flex flex-col w-full text-[#FCFCFC] text-xl font-medium font-quickSand'>
        <div className="w-full h-auto p-5 bg-[#5B9BD5] my-5 rounded-[10px]">
        SDG 2: No Hunger: Increase in farmers productivity to provide enough food for the farmer’s family, community and achieve food security
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2 gap-5">
            <div className="w-full h-full p-5 bg-[#2ECF8B] rounded-[10px]">
            SDG 9: Industry, Innovation, and Infrastructure: Driving industrialization through the availability of agricultural materials across the midstream value-chain, which will consequently power innovations and infrastructure development.
            </div>
            <div className="w-full h-full p-5 bg-[#BE8BFF] rounded-[10px]">
            SDG 12: Responsible Consumption and Production: Educating farmers about the best agricultural practices, safety measures, use of manure, as well as appropriate usage of agrochemicals and fertilizers.
            </div>
        </div>
    </div>
  )
}
