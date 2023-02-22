import React from 'react'
import { Heading } from '../components/Heading'
import { Social } from '../components/Social'

const contact = () => {
  return (
    <main>
      <Heading header="Contact Us" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        fugit sequi debitis consectetur doloremque soluta, natus nam voluptatum
        ipsam dolorum ut voluptates voluptatem et, veniam autem iste illum optio
        sit.
      </p>

      <section>
        <div>
          <h2>Send us a message</h2>
          <form>
            <div className="">
              <input type="text" placeholder="Name" />
            </div>

            <div className="">
              <input type="email" placeholder="Email" />
            </div>

            <div className="">
              <textarea placeholder="Message"></textarea>
            </div>

            <div className="">
              <button>Send Message</button>
            </div>
          </form>
        </div>
        <div>
          <h3>Head Office</h3>
          <p>7 Gambo Sawaba, Gwarimpa Abuja</p>

          <Social logo="twitter" name="@aglaneng" link='meta' />
          <Social logo="instagram" name="info@aglane.ng" link='meta' />
          <Social logo="mail" name="info@aglane.ng" link='mailto:info@aglane.ng' />
          <Social logo="phone" name="+234 803 244 8790" link='tel:+2348032448790' />
        </div>
      </section>
    </main>
  )
}

export default contact
