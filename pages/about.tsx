import data from "../data/coreValues.json";
import React, { useState } from "react";
import { HtmlHead } from "../components/Head";
import { Heading, MidHeading, SmallHeader } from "../components/Heading";
import { AccordionItem } from "../components/AccordionItem";
import Image from "next/image";
import { TargetedSdgs } from "../components/TargetedSdgs";
import { PlanOfChange } from "../components/PlanOfChange";
import Banner from "../components/Banner";

const About = () => {
  const [open, setOpen] = useState<number | boolean>(false);
  const [readMore, setReadMore] = useState(false);

  const toggle = (index: number) => {
    if (open === index) return setOpen(false);
    setOpen(index);
  };

  const read = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <HtmlHead title="About Us" />
      <main className="pt-28 mb-0 w-full h-full">
     
          <Banner
            header="About Us"
            info="We are a social enterprise engaged in climate-smart agriculture, specializing in end-to-end agricultural primary production, farmer and produce aggregation, and commodity trading for sustainable food systems. Our strategy focuses on increasing agricultural productivity and income sustainably, adapting to and strengthening resilience to climate change, and reducing and/or removing greenhouse gas emissions where possible."
            img = {"/assests/SVGs/about/About_Us.png"}
          />

        <section className="flex flex-col gap-y-20">
          <div className="flex flex-col lg:flex-row w-full items-center gap-5 p-3 lg:px-[6.25rem] lg:pt-[3.125rem] lg:pb-6 lg:gap-[8.75rem] cropBg">
            <div className="w-fit">
              <MidHeading header={"OUR VISION"} />

              <p className="font-quickSand font-normal text-xl md:text-[1.625rem] leading-[2.75rem] text-[#494949]">
                To become a leading investor in the agribusiness space by
                forming beneficial and profitable partnerships with smallholder
                farmers and other key stakeholders in Nigeria, making
                agribusiness appealing and attractive to young Nigerians.
                <br />
                <br />
                <span className="font-medium text-[#3A3A3A]">
                  Our Key Focus: Building food systems, achieving food security,
                  adopting innovative technology and creating impact in line
                  with targeted SDGs
                </span>
              </p>
            </div>
            <div className="w-fit">
              <Image
                src={"/assests/SVGs/about/vision.svg"}
                width={360}
                height={360}
                alt={"Vision image"}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-5 p-3 lg:px-[6.25rem] lg:pt-[2.69rem] lg:pb-6 lg:gap-[4.69rem]">
            <div className="w-fit">
              <Image
                src={"/assests/SVGs/about/mission.svg"}
                width={280}
                height={280}
                alt={"Mission image"}
                className="w-full h-full"
              />
            </div>
            <div className="w-fit">
              <MidHeading header={"OUR MISSION"} />
              <p className="font-quickSand font-normal text-xl md:text-[1.625rem] leading-[2.75rem] text-[#494949]">
                To produce quality agricultural commodities using improved
                production systems, value addition and marketing innovations for
                multiple benefits.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[4.357rem] p-3 lg:pt-5 lg:px-[6.25rem] lg:pb-6 mb-[4.357rem] cropBg">
          <MidHeading header={"CORE VALUES"} />

          <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            {data &&
              data.data.map((val, index) => (
                <div key={index}>
                  <AccordionItem
                    key={index}
                    open={index === open}
                    toggle={() => toggle(index)}
                    title={val.title}
                    description={val.description}
                    bg={val.color}
                  />
                </div>
              ))}
          </div>
        </section>

        <div className="p-3 lg:px-[6.25rem] lg:pt-[2.69rem] lg:pb-6">
          <section className="border border-[#D5D5D5] bg-[#FCFCFC] w-full rounded-[20px] p-5 h-full">
            <SmallHeader header="Our Plan" />
            <PlanOfChange />
          </section>

          <div className="flex justify-center w-full py-5 mx-auto">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="61"
                width="60"
                height="60"
                rx="30"
                transform="rotate(-90 1 61)"
                fill="#FCFCFC"
                stroke="#3A3A3A"
              />
              <path
                d="M33.0013 41.1225L36.7188 37.2521C36.8079 37.1591 36.8786 37.0485 36.9269 36.9267C36.9751 36.8048 37 36.6741 37 36.542C37 36.41 36.9751 36.2793 36.9269 36.1574C36.8786 36.0355 36.8079 35.9249 36.7188 35.832C36.5406 35.6457 36.2997 35.5411 36.0485 35.5411C35.7973 35.5411 35.5563 35.6457 35.3782 35.832L31.965 39.3924L31.965 19.0001C31.965 18.7349 31.8648 18.4805 31.6865 18.2929C31.5082 18.1054 31.2664 18 31.0143 18V18C30.7621 18 30.5203 18.1054 30.342 18.2929C30.1637 18.4805 30.0635 18.7349 30.0635 19.0001L30.0635 39.4524L26.6313 35.832C26.5429 35.7382 26.4378 35.6638 26.3219 35.613C26.206 35.5623 26.0818 35.5361 25.9563 35.5361C25.8308 35.5361 25.7065 35.5623 25.5906 35.613C25.4748 35.6638 25.3696 35.7382 25.2812 35.832C25.1921 35.9249 25.1214 36.0355 25.0731 36.1574C25.0248 36.2793 25 36.41 25 36.542C25 36.6741 25.0248 36.8048 25.0731 36.9267C25.1214 37.0485 25.1921 37.1591 25.2812 37.2521L28.9701 41.1225C29.5049 41.6844 30.2299 42 30.9857 42C31.7416 42 32.4665 41.6844 33.0013 41.1225Z"
                fill="#428821"
              />
            </svg>
          </div>

          <section className="border border-[#D5D5D5] bg-[#FCFCFC] w-full rounded-[20px] p-5 h-full">
            <SmallHeader header="To Result" />
            <div className="mt-5 w-full h-full text-[#FCFCFC] text-xl font-medium font-quickSand">
              <div className="h-full p-5 bg-[#5B9BD5] rounded-[10px]">
                A community of primary producers that have all resources needed
                to produce high yield for national and continental food
                sufficiency
              </div>
            </div>
          </section>
          <div className="flex justify-center w-full py-5 mx-auto">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="61"
                width="60"
                height="60"
                rx="30"
                transform="rotate(-90 1 61)"
                fill="#FCFCFC"
                stroke="#3A3A3A"
              />
              <path
                d="M33.0013 41.1225L36.7188 37.2521C36.8079 37.1591 36.8786 37.0485 36.9269 36.9267C36.9751 36.8048 37 36.6741 37 36.542C37 36.41 36.9751 36.2793 36.9269 36.1574C36.8786 36.0355 36.8079 35.9249 36.7188 35.832C36.5406 35.6457 36.2997 35.5411 36.0485 35.5411C35.7973 35.5411 35.5563 35.6457 35.3782 35.832L31.965 39.3924L31.965 19.0001C31.965 18.7349 31.8648 18.4805 31.6865 18.2929C31.5082 18.1054 31.2664 18 31.0143 18V18C30.7621 18 30.5203 18.1054 30.342 18.2929C30.1637 18.4805 30.0635 18.7349 30.0635 19.0001L30.0635 39.4524L26.6313 35.832C26.5429 35.7382 26.4378 35.6638 26.3219 35.613C26.206 35.5623 26.0818 35.5361 25.9563 35.5361C25.8308 35.5361 25.7065 35.5623 25.5906 35.613C25.4748 35.6638 25.3696 35.7382 25.2812 35.832C25.1921 35.9249 25.1214 36.0355 25.0731 36.1574C25.0248 36.2793 25 36.41 25 36.542C25 36.6741 25.0248 36.8048 25.0731 36.9267C25.1214 37.0485 25.1921 37.1591 25.2812 37.2521L28.9701 41.1225C29.5049 41.6844 30.2299 42 30.9857 42C31.7416 42 32.4665 41.6844 33.0013 41.1225Z"
                fill="#428821"
              />
            </svg>
          </div>

          <section className="border border-[#D5D5D5] bg-[#FCFCFC] w-full rounded-[20px] p-5 h-full">
            <SmallHeader header="Targeted  SDGs" />
            <TargetedSdgs />
          </section>
        </div>
        <section className="p-3 mt-[4.357rem] pb-[4.357rem] lg:px-[6.25rem] lg:pt-[2.69rem] cropBg">
          <MidHeading header={"MANAGING PARTNER’S ADDRESS"} />

          <div className="flex flex-col lg:grid lg:grid-cols-[18.75rem_auto] gap-7 w-full mb-7">
            <div className="col-span-[18.75rem] mx-auto mt-5 md:mt-0">
              <Image
                src={"/assests/SVGs/team/managingPartner.png"}
                width={300}
                height={300}
                alt={"Managing Partner"}
              />

              <div className="flex flex-col text-center w-full">
                <h3 className="text-2xl leading-[2.29em] font-montserrat font-semibold text-[#428821]">
                  Olusola Omole, FCA
                </h3>
                <span className="font-quickSand font-medium text-xl">
                  Managing Partner
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <article className="font-quickSand text-xl md:text-2xl leading-10 font-medium text-[#494949]">
                “Agribusiness is undergoing a major transformation as advances
                in technology continue to revolutionize the ecosystem. From
                digital agriculture to precision and climate-smart agriculture,
                the way we grow and manage our farmlands is becoming more
                innovative and efficient by the day. We at AgLane have embraced
                this wave of change and taken full advantage of the
                opportunities. Our approach to Agribusiness focuses on utilizing
                digital technology to create a fully integrated system that
                supports farmers.
                <span className={readMore ? "flex" : "hidden"}>
                  {" "}
                  I am thrilled to announce that our team of agricultural
                  experts is leveraging new and cutting-edge technology,
                  automation, and digital tools to improve the efficiency of our
                  operations, make data-driven decisions, minimize crop loss and
                  boost crop yield. We are also utilizing digital tools to
                  enhance remote monitoring, improve water management and give
                  insights into soil health. At AgLane, we are dedicated to
                  helping our customers and partners grow, thrive, and succeed
                  in the ever-changing agribusiness landscape. We provide
                  innovative solutions that leverage the power of technology to
                  maximize operational efficiency, streamline production, and
                  facilitate the aggregation and trading of healthy agricultural
                  products. Our main business focus is to redefine agriculture
                  through primary crop production, farmer and produce
                  aggregation, and commodity trading. We are confident that we
                  can build better food systems through our modern technologies,
                  one of which is the AgLanegrator software. We embrace
                  innovation and excellence in all our operations, to continue
                  improving access and quality in the food production sector. We
                  are driven by innovation to provide you with the needed tools
                  to run a productive agribusiness. We are excited to continue
                  working together with our existing and prospective customers
                  to make agriculture more successful and sustainable. <br />{" "}
                  <br />
                  Thank you.”
                </span>
                {readMore ? (
                  <button
                    className="text-xl font-medium text-[#428821] outline-none"
                    onClick={() => read()}
                  >
                    read less
                  </button>
                ) : (
                  <button
                    className="pl-3 md:pl-1 text-xl font-medium text-[#428821] outline-none"
                    onClick={() => read()}
                  >
                    read more...
                  </button>
                )}
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
