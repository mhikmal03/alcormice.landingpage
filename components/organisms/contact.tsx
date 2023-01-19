import React from 'react'
import Input from '../atoms/input'
import Layout from './layout'

const Contact = () => {
  return (
    <Layout>
      <div id='contact' className='text-white py-20'>
        <div className='heading text-center font-extrabold text-4xl mb-16'>
          <h1>CONTACT</h1>
        </div>
        <div className='flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row justify-around items-center'>
          <div className='maps'>
            <iframe
              data-aos="fade-up"
              data-aos-duration="1000"
              className='darkMaps min-w-[300px] md:w-[500px] h-[250px]'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3056424952283!2d106.84048315104833!3d-6.223370095472885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38cc1745025%3A0x5068e84a3c006001!2sJl.%20Raya%20Casablanca%20No.88%2C%20RT.16%2FRW.5%2C%20Menteng%20Dalam%2C%20Kec.%20Tebet%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012870!5e0!3m2!1sen!2sid!4v1674020473016!5m2!1sen!2sid"
              loading="lazy">
            </iframe>
          </div>
          <div className='input'>
            <Input />
          </div>
        </div>

      </div>
    </Layout>
  )

}

export default Contact