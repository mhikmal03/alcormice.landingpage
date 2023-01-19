import React from 'react'
import Image from 'next/image'
import image1 from '../../public/assets/images/image 3.svg'
import image2 from '../../public/assets/images/image 4.svg'
import image3 from '../../public/assets/images/image 5.svg'
import Link from 'next/link'



const Hero = () => {
    return (

        <div className='flex flex-col gap-8 xl:gap-0 md:flex-row h-[75vh] w-full md:items-center justify-center items-start md:justify-between'>

            <div className="left flex flex-col gap-10">
                <div className='flex justify-center items-start gap-4'>
                    <div data-aos="fade-right" data-aos-duration="1000" className='bg-white hidden lg:block md:w-10 xl:w-16 md:h-1 xl:h-2 rounded-sm md:mt-5 xl:mt-10'></div>
                    <div className='flex flex-col md:gap-4 lg:gap-5 xl:gap-10 xl:max-w-[700px] 3xl:max-w-[900px]'>
                        <h1 data-aos="fade-right" data-aos-duration="1000" className='3xl:text-7xl  md:font-black lg:text-[30px] xl:text-[50px] lg:max-w-xl xl:max-w-4xl font-bold text-[25px]'>To build businesses that give
                            impact to the <span className='bg-gradient-to-r from-cyan-400 to-[#7B89CA] text-transparent bg-clip-text'>society.</span></h1>
                        <div className='hidden md:flex gap-5'>
                            <button data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className='bg-gradient-to-r from-cyan-400 to-[#7B89CA] px-6 py-2 rounded-sm font-semibold text-lg'><Link href='#service'>Get Started</Link></button>
                            <button data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className='font-semibold border-b-4 border-blue-400'><Link href='#project'>Our Project</Link></button>
                        </div>
                        <div className='hidden lg:flex gap-10 w-[100px] xl:w-[180px] '>
                            <Image data-aos="fade-up"
                                data-aos-delay='300'
                                className='grayscale hover:grayscale-0' src={image1} alt='1'></Image>
                            <Image data-aos="fade-up"
                                data-aos-delay='600'
                                className='grayscale hover:grayscale-0' src={image2} alt='2'></Image>
                            <Image data-aos="fade-up"
                                data-aos-delay='900'
                                className='grayscale hover:grayscale-0' src={image3} alt='3'></Image>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" className="right 3xl:max-w-[900px] 2xl:max-w-[560px] md:max-w-[300px]">
                <h3 className='lg:font-medium lg:text-lg xl:text-xl text-justify font-medium text-sm md:text-base xl:pb-[150px] 2xl:pb-[235px] 3xl:text-3xl'>Going beyond our mission as a one stop solution in the event industry, we're now expanding our business to work on strategic activation programs that generate more impact to your brand.</h3>
            </div>
            <div className='flex gap-5 md:hidden'>
                <button className='bg-blue-400 px-5 py-1 rounded-sm font-semibold text-md'>Get Started</button>
                <button className='font-semibold'>Our Projects</button>
            </div>


        </div>
    )
}

export default Hero