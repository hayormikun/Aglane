import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import data from '../data/testimonials.json'
import pics from '../data/carousel.json'
import { useRef } from 'react'
import { SliderArrows } from './SliderArrows'
import Link from 'next/link'


export const Testimonials = () => {
  const slider = useRef<any>(null)

  const next = () => {
    slider.current?.slickNext();
  };
   const previous = () => {
    slider.current?.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    pauseOnHover: true,
  }



  return (
    <section className="mr-4">
      <Slider ref={(c) => (slider.current = c)} {...settings}>
        {data &&
          data.data.map((person, index) => (
            <>
              <div key={index} className="flex flex-col md:flex-row w-full items-start">
                <div className="flex h-full w-fit mr-[3.125em] mb-3">
                  <Image
                    src={person.pic}
                    width={400}
                    height={400}
                    alt={person.name}
                  />
                </div>

                <div className="flex flex-col justify-start w-fit">
                  <p className="text-xl md:text-2xl md:leading-10 font-quickSand font-normal md:mr-20 mb-3 md:mb-20 text-[#494949]">
                    {person.testimonial}
                  </p>
                  <div className="">
                    <h3 className="font-montserrat text-2xl md:text-4xl font-semibold mb-2">
                      {person.name}
                    </h3>
                    <span className="font-montserrat text-[#428821] text-sm md:text-lg font-light">
                      {person.title}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
      </Slider>

      <SliderArrows prev={previous} next={next}/>
    </section>
  )
}

export const Gallery = () => {
  const settings = {
    className: 'center',
    dots: true,
    centerMode: true,
    centerPadding: '100px',
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
  }

  return (
    <Slider {...settings}>
      {pics &&
        pics.images.map((image, index) => (
          <div className="flex flex-row gap-5 outline-none hover:cursor-pointer" key={index}>
            <Link
                href={'/media'}
              >
                <div className="block relative w-[300px]">
            <Image
              src={image.pic}
              width={300}
              height={300}
              alt={image.caption}
            />
            <span className='absolute z-20 text-sm py-2 flex justify-center align-middle bottom-0 text-center bg-black bg-opacity-70 font-montserrat font-thin text-white w-full'>{image.caption}</span>
            </div>
            </Link>
          </div>
        ))}
    </Slider>
  )
}
