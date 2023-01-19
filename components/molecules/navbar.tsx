import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/images/logo.svg'
import Link from 'next/link'


const Navbar = () => {

  const [mobile, setMobile] = useState(false)
  const handleToogle = () => {
    setMobile(!mobile)
  }


  return (
    <div className='flex items-center justify-between py-8'>
      <div className="left">
        <Image src={Logo} alt='tes' />
      </div>
      <ul className={`${mobile ?
        'fixed md:hidden z-50 flex flex-col gap-10 font-semibold text-white text-lg bg-light-main w-full h-screen items-center justify-center left-0 right-0 top-0 -translate-x-[100%] duration-1000 ease-in-out'
        :
        'fixed md:hidden z-50 flex flex-col gap-10 font-semibold text-white text-lg bg-light-main w-full h-screen items-center justify-center right-0 top-0  translate-x-0 duration-1000 ease-in-out'}`}>
        <li><Link href='#service' onClick={handleToogle}>Services</Link></li>
        <li><Link href='#about' onClick={handleToogle}>About us</Link></li>
        <li><Link href='#project' onClick={handleToogle}>Project</Link></li>
        <li><Link href='#values' onClick={handleToogle}>Values</Link></li>
        <li><Link href='#contact' onClick={handleToogle}>Contact</Link></li>
      </ul>
      <div className='right'>
        <ul className='hidden md:flex flex-col md:flex-row gap-10 font-semibold text-lg'>
          <li><Link href='#service'>Services</Link></li>
          <li><Link href='#about'>About us</Link></li>
          <li><Link href='#project'>Project</Link></li>
          <li><Link href='#values'>Values</Link></li>
          <li><Link href='#contact'>Contact</Link></li>
        </ul>
      </div>



      <div className={`hamburger z-50 md:hidden text-2xl ease-out duration-50000 ${mobile ? 'text-5xl' : 'text-3xl fixed right-20'}`}>
        <button onClick={handleToogle}>{mobile ? "=" : 'X'}</button>
      </div>
    </div>
  )
}

export default Navbar