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
          info="Our major social impact as operators in the Agribusiness space is
            enhancing a sustainable and effective food system, which includes
            promoting sustainable agriculture to end hunger and malnutrition
            with the guarantee that this will create healthier communities and a
            more prosperous nation. As a measure of social impact, some
            sustainable development goals that our work touches on are SDG 1, 2,
            5, 8, 9, 12 and 13."
          img="/assests/SVGs/Impacts/Social_Impact.png"
        />

        <section className="pb-10">
          {data &&
            data.data.map((pillar, index) => (
              <div key={index}>
                {index % 2 != 0 ? (
                  <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[5.625rem] w-full p-3 lg:px-[6.25rem] lg:pt-5 pb-6 mb-7 cropBg">
                    <div className="w-full lg:w-[50%] pt-5 md:pt-0">
                      <Image
                        src={pillar.pic}
                        width={500}
                        height={5000}
                        alt={pillar.title}
                        className={"w-fit lg:w-full lg:h-full mx-auto"}
                      />
                    </div>
                    <div className="flex flex-col lg:w-[50%] w-full">
                      <h2 className="font-montserrat font-semibold text-xl md:text-[1.625rem] leading-[4.0625rem]">
                        {pillar.title}
                      </h2>
                      <p className="font-quickSand text-2xl font-normal text-[#494949]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row lg:gap-x-[5.625rem] p-3 lg:px-[6.25rem] w-full mb-7">
                    <div className="flex flex-col">
                      <h2 className="font-montserrat font-semibold text-xl md:text-[1.625rem] leading-[4.0625rem]">
                        {pillar.title}
                      </h2>
                      <p className="font-quickSand font-normal text-2xl text-[#494949]">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="w-full bg-[#FCFCFC] pt-5 md:pt-0">
                      <Image
                        src={pillar.pic}
                        width={500}
                        height={500}
                        alt={pillar.title}
                        className={"w-fit lg:h-full mx-auto"}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </section>
      </main>
    </>
  );
};

export default pillars;
