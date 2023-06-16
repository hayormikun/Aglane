import Image from "next/image";
import { HtmlHead } from "../../components/Head";
import { Heading, SmallHeader } from "../../components/Heading";
import Banner from "../../components/Banner";

const pillars = () => {
  return (
    <>
      <HtmlHead title="Core Services" />
      <main className="pt-28 mb-0 w-full h-full">
        {/* <Banner
          header="Core Services"
          info="We implement climate-smart technologies to safeguard soil health while adapting to and improving resilience to climate change, while simultaneously minimizing greenhouse gas emissions, food loss, and waste in agricultural production wherever possible."
          img="/assests/SVGs/solutions/pillars.png"
        /> */}

        <section className="">
          <div>
            <div className="flex flex-col lg:flex-row lg:gap-x-[5.625rem] w-full p-5 lg:px-[6.25rem] lg:py-24 bg-[#229177]">
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] md:leading-[4.0625rem] mb-3 text-white">
                  Farmer and Produce Aggregation
                </h2>
                <p className="font-quickSand text-xl lg:text-[1.35rem] font-normal text-[#F8F8FF]">
                  <b>Farmer Aggregation:</b> Through our solution “Aglanegrator”
                  developed to onboard farmers for on-lending, monitoring of
                  end-to-end primary production and ensuring the traceability of
                  inputs and produce, we offer solutions around the challenges
                  of obtaining reliable and accurate data on smallholder
                  farmers.
                  <br />
                  <br />
                  <b>Produce Aggregation:</b> Through our wide network of
                  farmers, we aggregate quality produce that meets the standards
                  and requirements of the local and international markets.
                </p>
              </div>

              <div className="w-full lg:w-[50%] pt-7 lg:pt-5 md:pt-0">
                <Image
                  src={"/assests/SVGs/pillars/farmersProduce.png"}
                  width={600}
                  height={400}
                  alt={"Farmer and Produce Aggregation"}
                  className={"w-fit lg:h-full mx-auto"}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[5.625rem] w-full p-5 lg:px-[6.25rem] lg:py-24 bg-gray-200">
              <div className="w-full lg:w-[50%] pt-7 lg:pt-5 md:pt-0">
                <Image
                  src={"/assests/SVGs/pillars/primaryProduction.png"}
                  width={600}
                  height={400}
                  alt={"End-to-end Agricultural Primary Production"}
                  className={"w-fit lg:w-full lg:h-full mx-auto"}
                />
              </div>
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] md:leading-[4.0625rem] mb-3">
                  End-to-end Agricultural Primary Production
                </h2>
                <p className="font-quickSand text-xl lg:text-[1.35rem] font-normal text-[#494949]">
                  This pillar is focused on offering novel solutions to improve
                  farming practices and assist smallholder farmers including
                  women and youth in becoming financially viable agricultural
                  commodity providers.
                  <br /> <br /> With climate change impacting harvest
                  predictability and the viability of several regional crops, we
                  practice and promote climate-smart and sustainable agriculture
                  following SDG 2.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col lg:flex-row lg:gap-x-[5.625rem] w-full p-5 lg:px-[6.25rem] lg:py-24 bg-[#c9af3d]">
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] md:leading-[4.0625rem] mb-3 text-white">
                  Commodity Trading
                </h2>
                <p className="font-quickSand text-xl lg:text-[1.35rem] font-normal text-[#F8F8FF]">
                  AgLane changes the way trade works through better prices and
                  providing a fairer deal for farmers. We offer guaranteed
                  access to a market where smallholder farmers sell their
                  produce at a premium.Through our inclusive out-growers model,
                  we are creating a platform where farmers earn foreign exchange
                  by linking them to buyers all over the world.
                </p>
              </div>

              <div className="w-full lg:w-[50%] pt-7 lg:pt-5 md:pt-0">
                <Image
                  src={"/assests/SVGs/pillars/comodityTrading.jpeg"}
                  width={600}
                  height={400}
                  alt={"Commodity Trading"}
                  className={"w-fit lg:w-full lg:h-full mx-auto"}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[5.625rem] w-full p-5 lg:px-[6.25rem] lg:py-24 bg-gray-200">
              <div className="w-full lg:w-[50%] pt-7 lg:pt-5 md:pt-0">
              <Image
                  src={"/assests/SVGs/pillars/renewableEnergy.png"}
                  width={600}
                  height={400}
                  alt={"Renewable Energy"}
                  className={"w-fit lg:h-full mx-auto"}
                />
              </div>
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] md:leading-[4.0625rem] mb-3">
                Renewable Energy
                </h2>
                <p className="font-quickSand text-xl lg:text-[1.35rem] font-normal text-[#494949]">
                This pillar’s primary goal is to reduce greenhouse gas
                  emissions and the carbon footprint of agriculture.In
                  collaboration with our partners, we offer universal access to
                  clean, affordable, and reliable energy services. We also
                  provide and install modern, sustainable, and environmentally
                  friendly power generation technologies for our clients at
                  pocket-friendly prices.
                </p>
              </div>
            </div>
          </div> 
      
          <div>
            <div className="flex flex-col lg:flex-row lg:gap-x-[5.625rem] w-full p-5 lg:px-[6.25rem] lg:py-24 bg-[#c09a6e]">
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] md:leading-[4.0625rem] mb-3 text-white">
                Warehouse & Inventory Management
                </h2>
                <p className="font-quickSand text-xl lg:text-[1.35rem] font-normal text-[#F8F8FF]">
                AgLane provides tailored warehouse and inventory management
                  solutions to protect nutritional value while
                  minimizing postharvest losses during storage. We provide
                  continuous monitoring of environmental parameters such as
                  temperature, humidity, and oxygen to enable preventive
                  actions. We provide and deliver innovative solutions as well
                  as full operational visibility and traceability to our clients
                  for a clear vision of growth and success.
                </p>
              </div>

              <div className="w-full lg:w-[50%] pt-7 lg:pt-5 md:pt-0">
              <Image
                  src={"/assests/SVGs/pillars/warehouse.png"}
                  width={600}
                  height={400}
                  alt={"Warehouse & Inventory Management"}
                  className={"w-fit lg:h-full mx-auto"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default pillars;
