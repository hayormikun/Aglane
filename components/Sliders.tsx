import Image from 'next/image'
import Slider from 'react-slick'
import data from '../data/testimonials.json'

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...settings}>
        {data &&
          data.data.map((person, index) => (
            <div key={index} className="flex flex-row">
              {/* <div className=""><Image src={testimonial.pic} width={400} height={400} alt={testimonial.name}/></div> */}
              <div className="flex flex-col">
                <p>{person.testimonial}</p>
                <div className="">
                  <h3>{person.name}</h3>
                  <span>{person.title}</span>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </>
  )
}
