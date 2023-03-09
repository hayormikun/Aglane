import Image from 'next/image'
import Slider from 'react-slick'

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amina Mohammed Abdullahi',
      pic: '',
      title: 'Field Supervisor',
      testimonial:
        'AgLane is the best and most outstanding company I have ever worked with. I am proud to be part of the AgLane family.',
    },
    {
      name: 'Moses Oke',
      pic: '',
      title: 'Field Manager',
      testimonial:
        'AgLane Nigeria Ltd. has created an enabling environment for me to learn about agricultural innovation. The organization has provided me with a platform for disseminating agricultural information to rural communities.',
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
    <Slider {...settings}>
      { testimonials && testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-row">`
        {/* <div className=""><Image src={testimonial.pic} width={400} height={400} alt={testimonial.name}/></div> */}
      <div className="flex flex-col">
          <p>
            {testimonial.testimonial}
          </p>
          <div className="">
            <h3>{testimonial.name}</h3>
            <span>{testimonial.title}</span>
          </div>
        </div>
      </div>
      ))}
    </Slider>
    </>
  )
}
