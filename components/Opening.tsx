type OpeningPropsType = {
  designation: string
  jobType: string
  location: string
  staffType: string
}

export const Opening = ({
  designation,
  jobType,
  location,
  staffType,
}: OpeningPropsType) => {
  return (
    <div className="bg-[#FCFCFC] grid grid-cols-6 mb-2 pb-2 items-center w-full border-b border-[#D5D5D5] gap-x-12 h-auto">
      <div className="col-span-2 font-montserrat font-semibold capitalize text-xl leading-[3.0625em] text-[#428821]">
        {designation}
      </div>
      <div className="col-span-1 mx-auto font-quickSand font-medium text-xl">
        <button className="bg-[#42882133] py-4 px-[3.25em] tracking-wider capitalize rounded-full">
            {jobType}
        </button>
      </div>
      <div className="col-span-2 mx-auto font-quickSand font-medium text-xl capitalize">
        {location}
      </div>
      <div className="col-span-1 font-quickSand font-medium text-xl capitalize">
        {staffType}
      </div>
    </div>
  )
}
