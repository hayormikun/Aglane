import sdgs from '../data/sdgs.json'

export const TargetedSdgs = () => {
  return (
    <div className="flex flex-col mt-5 lg:grid lg:grid-flow-col md:gap-x-5 gap-3 w-auto h-full text-[#FCFCFC] text-xl font-medium font-quickSand">
      {sdgs &&
        sdgs.data.map((sdg, index) => (
          <div
            key={index}
            style={{ backgroundColor: sdg.color }}
            className="h-full p-5 rounded-[10px]"
          >
            {sdg.title}: {sdg.description}
          </div>
        ))}
    </div>
  )
}
