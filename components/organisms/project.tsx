import React from 'react'
import Image from 'next/image'
import image1 from '../../public/assets/images/project/Rectangle 21.svg'
import image2 from '../../public/assets/images/project/Rectangle 22.svg'
import image3 from '../../public/assets/images/project/Rectangle 23.svg'
import image4 from '../../public/assets/images/project/Rectangle 24.svg'
import Layout from './layout'
import bg from '../../public/assets/images/project/bgProject.svg'

const Project = () => {
  return (
    <Layout>
      <div id='project' className='py-20 flex flex-col'>
        <div className='heading text-white font-extrabold text-3xl lg:text-4xl'>
          <h1 className='text-center'>Our Project</h1>
        </div>
        <div className='text-center md:text-right mt-5 md:mt-10 mb-4'>
          <button className='text-center text-white border-blue-500 border rounded-sm px-3 py-1'>View More</button>
        </div>
        <div className='Cards hidden lg:flex flex-col lg:flex-row gap-20 items-center justify-between'>
          <Image className='w-[190px] 2xl:w-[350px]' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" src={image1} alt='coba dlu' ></Image>
          <Image data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150" src={image2} className='w-[190px] 2xl:w-[350px] hover:scale-110 duration-500 ease-in-out' alt='coba dlu' ></Image>
          <Image data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300" src={image3} className='w-[190px] 2xl:w-[350px] hover:scale-110 duration-500 ease-in-out' alt='coba dlu' ></Image>
          <Image data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="450" src={image4} className='w-[190px] 2xl:w-[350px] hover:scale-110 duration-500 ease-in-out' alt='coba dlu' ></Image>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150" className='block lg:hidden m-auto'>
          <Image src={bg} alt='galeryproject'></Image>
        </div>
      </div>
    </Layout>
  )
}

export default Project