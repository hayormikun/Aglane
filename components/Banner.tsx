import { info } from "console";
import { Heading } from "./Heading";
import { URL } from "url";
import { ReactHTMLElement, ReactNode } from "react";

type BannerPropsType = {
  header: string
  info: string | ReactNode
  img: string
};

const Banner = ({ header, info, img }:  BannerPropsType) => {
  return (
    <section className="px-3 lg:px-[6.25rem]" style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",  backgroundColor: "#428821", width: "100%", height: "auto", paddingTop: "3rem", paddingBottom: "2rem"}}>
      <h1 className="text-3xl mx-auto font-montserrat font-semibold text-[#FCFCFC] uppercase w-full mb-[1.875rem]">
        {header}
      </h1>
      <div className="font-quickSand font-normal text-xl md:text-[1.625rem] leading-[2.75rem] text-[#FCFCFC]">
        {info}
      </div>
    </section>
  );
};

export default Banner;
