import React from 'react'
import Layout from './layout'
import Image from 'next/image'
import Logo from '../../public/assets/images/logo.svg'
import instragram from '../../public/assets/icons/mdi_instagram.svg'
import linkedin from '../../public/assets/icons/mdi_linkedin.svg'
import twitter from '../../public/assets/icons/mdi_twitter.svg'
import youtube from '../../public/assets/icons/mdi_youtube.svg'

const Footer = () => {
  return (
    <div className='bg-light-main text-white font-semibold'>
      <Layout>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center py-10'>
          <div className='flex flex-col md:flex-row gap-10 items-center text-center justify-items-start'>
            <Image src={Logo} alt="logoalcormice" ></Image>
            <div className='flex flex-col gap-2'>
              <ul className='flex gap-5 justify-center'>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Values</a></li>
                <li><a href="">Contact</a></li>
              </ul>
              <div><p className='font-normal'>© 2023 Alcormice. All right reserved.</p></div>
            </div>
          </div>


          <div className='flex flex-col gap-2 items-center justify-center'>
            <div className='social flex gap-2'>
              <ul><li><a href=""><Image src={instragram} alt='instagram'></Image></a></li></ul>
              <ul><li><a href=""><Image src={linkedin} alt='linkedin'></Image></a></li></ul>
              <ul><li><a href=""><Image src={twitter} alt='twitter'></Image></a></li></ul>
              <ul><li><a href=""><Image src={youtube} alt='youtube'></Image></a></li></ul>
            </div>
            <h1>alcormicebusiness@gmail.com</h1>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Footer