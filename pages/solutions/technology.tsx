import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HtmlHead } from "../../components/Head";
import { Heading, MidHeading } from "../../components/Heading";
import Banner from "../../components/Banner";

const technology = () => {
  return (
    <>
      <HtmlHead title="Our Technology" />
      <main className="pt-28 mb-0 w-full h-full">
        <section className="w-full">
          <Banner
            header="Our Technology"
            info={
              <div className="mx-auto">
                <p>
                  <b>AgLanegrator</b> is a software used in monitoring and
                  tracking end-to-end agricultural primary production activities
                  such as input distribution and usage, produce aggregation and
                  storage, etc. it controls and administers warehouse operations
                  from the time inputs or commodities enter a warehouse until
                  they move out. It is useful in accessing bank loans and farm
                  inputs...{" "}
                  <Link
                    href={"https://aglane-aggregator.com/app"}
                    target={"_blank"}
                    className="font-semibold text-[#62cc60] underline"
                  >
                    {" "}
                    Get Started with AgLanegrator{" "}
                  </Link>
                </p>
              </div>
            }
            img={"/assests/SVGs/solutions/Our_Technology.png"}
          />

          <div className="w-full p-3 lg:px-[6.25rem] flex justify-center cropBg lg:pb-6">
            <Link href={"https://aglane-aggregator.com/app"} target={"_blank"}>
              <Image
                src={"/assests/SVGs/solutions/Aglanegrator.svg"}
                width={800}
                height={640}
                alt="AgLangrator Infographic"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default technology;
