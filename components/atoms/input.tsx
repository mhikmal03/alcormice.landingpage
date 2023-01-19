import React from 'react'

const Input = () => {
    return (
        <div>
            <form className='flex flex-col gap-5 text-sm max-w-[500px] min-w-[300px] md:w-[500px] font-bold text-white'>
                <input data-aos="fade-left"  type="text" placeholder='Your Name' className='bg-transparent py-2 outline-none border-white border-b' />
                <input data-aos="fade-left" data-aos-delay="150" type="text" placeholder='Your Email' className='bg-transparent py-2 outline-none border-white border-b' />
                <textarea data-aos="fade-left" data-aos-delay="300" placeholder='Note' className='bg-light-main p-2 pb-10 outline-none rounded-md' />
                <button data-aos="fade-left" data-aos-delay="450" className=''>Submit</button>
            </form>
        </div>
    )
}

export default Input