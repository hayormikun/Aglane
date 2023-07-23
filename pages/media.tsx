import React, { Fragment } from "react";
import data from "../data/media.json";
import { HtmlHead } from "../components/Head";
import { Heading, SmallHeader } from "../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "../components/Sliders";

const Media = () => {
  return (
    <>
      <HtmlHead title="AgLane Media" />
      <main className="pt-40 px-3 lg:px-[3.125rem] mb-0 cropBg w-full h-full">
        <section>
          <Heading header="Media" />
          {/* <article className="flex flex-col">
            <div className="">
              <SmallHeader header="Empowering Nigerian agriculture through collaboration! 🌱✨" />
              <p>
                Our Managing Partner, Olusola Omole, alongside Amb. Adegboyega
                Bamisile, CEO of St. Adba Limited, and Mr. Oluwatosin Itiowe,
                Managing Partner, SmartAg Solutions Limited, had a fruitful
                strategic meeting with the distinguished Akinwunmi Adesina,
                President of African Development Bank (AfDB), and his Special
                Advisor for Industrialization, Prof. Oyebanji Oyeleran-Oyeyinka,
                on the sidelines of the BusinessDay CEO Forum 2023. We discussed
                innovative ways to revolutionize the agricultural sector in
                Nigeria and create sustainable solutions for farmers. Together,
                we&apos;re paving the way for a brighter future in agriculture.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-y-10">
              {data &&
                data.images.map((image, index) => (
                  <Fragment key={index}>
                    {image.trip == "iseyin trip" ? (
                      <Image
                        src={image.pic}
                        width={360}
                        height={360}
                        alt={image.trip}
                        className="mb-4"
                      />
                    ) : (
                      ""
                    )}
                  </Fragment>
                ))}
            </div>
          </article> */}

          <article className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <SmallHeader header="🌱👨‍🌾 Nurturing growth from the ground up!" />
              <p className="font-quickSand font-normal text-xl leading-[1.7rem] text-[#494949]">
                The AgLane management team embarked on a pre-investment and
                production capacity evaluation visitation to the vibrant Ginger
                farms in Kwoi Community, Kaduna. Witnessing the dedication of
                the local farmers and the potential for growth, we&apos;re excited
                about the opportunity to support and invest in this community.
                AgLane aims to collaborate closely with the farmers, empowering
                them with modern agricultural techniques, access to markets, and
                sustainable practices. Together, we&apos;ll spice up the agricultural
                landscape and create a thriving ecosystem that benefits both
                farmers and consumers.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-y-10">
              {data &&
                data.images.map((image, index) => (
                  <Fragment key={index}>
                    {image.trip == "kaduna trip" ? (
                      <Image
                        src={image.pic}
                        width={360}
                        height={360}
                        alt={image.trip}
                        className="mb-4"
                      />
                    ) : (
                      ""
                    )}
                  </Fragment>
                ))}
            </div>
          </article>

          <article className="flex flex-col gap-y-5 mt-3 md:mt-7 pb-3 md:pb-7">
            <div className="flex flex-col gap-y-1">
              <SmallHeader header="🌿🏭 Witnessing agricultural excellence in action!" />
              <p className="font-quickSand font-normal text-xl leading-[1.7rem] text-[#494949]">
                The AgLane management team had an incredible field visit to the
                FoodRoad Cashew and Oil Palm Plantation at Iseyin, Nigeria. We
                were blown away by the dedication and innovation showcased by
                our field staff in cultivating cashews and producing quality oil
                palm. The collaboration between AgLane and FoodRoad is set to
                elevate Nigeria&apos;s cash-crop subsector of the agribusiness sector
                to new heights, empowering local farmers and boosting
                sustainable production. Together, we&apos;re cultivating a future of
                prosperity for Nigeria&apos;s agricultural landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-y-10">
              {data &&
                data.images.map((image, index) => (
                  <Fragment key={index}>
                    {image.trip == "iseyin trip" ? (
                      <Image
                        src={image.pic}
                        width={360}
                        height={360}
                        alt={image.trip}
                        className="mb-4"
                      />
                    ) : (
                      ""
                    )}
                  </Fragment>
                ))}
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Media;
