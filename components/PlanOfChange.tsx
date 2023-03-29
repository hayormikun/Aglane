import plan from '../data/planOfChange.json'

export const PlanOfChange = () => {
  return (
    <div className="flex flex-col mt-5 md:grid md:grid-cols-3 md:gap-x-5 gap-3 w-auto h-full text-[#FCFCFC] text-xl font-medium font-quickSand">
    {plan &&
      plan.data.map((plan, index) => (
        <div
          key={index}
          style={{ backgroundColor: plan.color }}
          className="h-full p-5 rounded-[10px]"
        >
          {plan.title}
        </div>
      ))}
  </div>
  )
}
