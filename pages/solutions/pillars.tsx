import Image from "next/image";
import { HtmlHead } from "../../components/Head";
import { Heading, SmallHeader } from "../../components/Heading";
import data from "../../data/pillars.json";
import Banner from "../../components/Banner";

const pillars = () => {
  return (
    <>
      <HtmlHead title="Core Services" />
      <main className="pt-28 mb-0 w-full h-full">
        <Banner
          header="Core Services"
          info=""
          img="/assests/SVGs/solutions/pillars.png"
        />

        <section className="pb-10">

        <div>
            <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[5.625rem] w-full p-3 lg:px-[6.25rem] lg:pt-5 pb-6 mb-7 cropBg">
              <div className="w-full lg:w-[50%] pt-5 md:pt-0">
                <Image
                  src={"/assests/SVGs/pillars/primaryProduction.png"}
                  width={500}
                  height={500}
                  alt={"End-to-end Agricultural Primary Production"}
                  className={"w-fit lg:w-full lg:h-full mx-auto"}
                />
              </div>
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] leading-[4.0625rem]">
                  End-to-end Agricultural Primary Production
                </h2>
                <p className="font-quickSand text-2xl lg:text-[1.35rem] font-normal text-[#494949]">
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
            <div className="flex flex-col lg:flex-row lg:gap-x-[5.625rem] w-full p-3 lg:px-[6.25rem] lg:pt-5 pb-6 mb-7">
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] leading-[4.0625rem]">
                  Farmer and Produce Aggregation
                </h2>
                <p className="font-quickSand text-2xl lg:text-[1.35rem] font-normal text-[#494949]">
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

              <div className="w-full lg:w-[50%] bg-[#FCFCFC] pt-5 md:pt-0">
                <Image
                  src={"/assests/SVGs/pillars/farmersProduce.jpeg"}
                  width={500}
                  height={500}
                  alt={"Farmer and Produce Aggregation"}
                  className={"w-fit lg:h-full mx-auto"}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[5.625rem] w-full p-3 lg:px-[6.25rem] lg:pt-5 pb-6 mb-7 cropBg">
              <div className="w-full lg:w-[50%] pt-5 md:pt-0">
                <Image
                  src={"/assests/SVGs/pillars/comodityTrading.jpeg"}
                  width={500}
                  height={500}
                  alt={"Commodity Trading"}
                  className={"w-fit lg:w-full lg:h-full mx-auto"}
                />
              </div>
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] leading-[4.0625rem]">
                  Commodity Trading
                </h2>
                <p className="font-quickSand text-2xl lg:text-[1.35rem] font-normal text-[#494949]">
                  AgLane changes the way trade works through better prices and
                  providing a fairer deal for farmers. We offer guaranteed
                  access to a market where smallholder farmers sell their
                  produce at a premium.\nThrough our inclusive out-growers
                  model, we are creating a platform where farmers earn foreign
                  exchange by linking them to buyers all over the world.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col lg:flex-row lg:gap-x-[5.625rem] w-full p-3 lg:px-[6.25rem] lg:pt-5 pb-6 mb-7">
              <div className="flex flex-col justify-center lg:w-[50%] w-full">
                <h2 className="font-montserrat font-semibold text-2xl md:text-[1.625em] leading-[4.0625rem]">
                  Renewable Energy
                </h2>
                <p className="font-quickSand text-2xl lg:text-[1.35rem] font-normal text-[#494949]">
                  This pillar’s primary goal is to reduce greenhouse gas
                  emissions and the carbon footprint of agriculture.\nIn
                  collaboration with our partners, we offer universal access to
                  clean, affordable, and reliable energy services. We also
                  provide and install modern, sustainable, and environmentally
                  friendly power generation technologies for our clients at
                  pocket-friendly prices.
                </p>
              </div>

              <div className="w-full lg:w-[50%] bg-[#FCFCFC] pt-5 md:pt-0">
                <Image
                  src={"/assests/SVGs/pillars/renewableEnergy.jpg"}
                  width={500}
                  height={500}
                  alt={"Renewable Energy"}
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
