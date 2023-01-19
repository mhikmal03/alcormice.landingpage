import React from 'react'
import Layout from './layout'
import Image from 'next/image'
import image7 from '../../public/assets/images/image 7.svg'
import image8 from '../../public/assets/images/image 8.svg'
import image9 from '../../public/assets/images/image 10.svg'
import group from '../../public/assets/images/Group1.svg'


const About = () => {
  return (

    <div id='about' className='bg-light-main h-auto text-white py-16'>
      <Layout>
        <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-20 lg:gap-10 2xl:gap-0'>
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='left flex flex-col items-center justify-center text-center max-w-lg w-[250px] md:w-[500px] lg:w-[500px]'>
            <Image src={group} alt='About us'></Image>
          </div>
          <div className='hidden 2xl:block 3xl:hidden w-2 h-72 bg-gradient-to-b from-cyan-300 to-[#7B89CA]'></div>
          <div className="right flex flex-col gap-8 lg:w-[500px] sm:w-[400px] xl:w-[700px] text-justify">
            <h1 data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500" className='font-black text-4xl xl:text-5xl'>About us</h1>
            <p data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500" className='font-medium text-md xl:text-xl'>We’re an event and activation enabler company
              Going beyond our mission as a one stop solution in the event industry, we're now expanding our business to work on strategic
              activation programs that generate more impact to your brand.
              <br />
              <br />
              Standing out from thousands of brands can be difficult without a well-targeted brand activation strategy. You’ll need to know
              your audience in order to surprise them, to create something interactive, interesting - memorable. You’ll find that collaborating
              with strategic partners greatly adds value to your brand. Combine this with a mind-blowing concept and you’ll have yourself
              the key to a successful event. Alcor MICE is here to make all of this possible for you.</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About