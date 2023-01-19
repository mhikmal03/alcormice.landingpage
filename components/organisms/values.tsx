import React, { useRef, useState } from 'react'
import thumbnail from '../../public/assets/images/bg.png'
import play from '../../public/assets/icons/play.svg'
import Image from 'next/image'

const Values = () => {
  const [hidden, setHidden] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setHidden(!hidden)
  };

  console.log(hidden)

  return (
    <>
      <div id='values' className='relative'>
        <video
          ref={videoRef}
          controls={false}
          id="my_video"
          className='w-[100%]'
          width="400"
          height="350"
          poster='/assets/images/videoplayer.svg'>
          <source src="https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
            type="video/mp4"
          />

        </video>
        <div className='centerButton'>
          <button onClick={handlePlay} className={`${hidden ? 'hidden' : 'text-white rounded-full border-4 border-white p-8 hover:scale-110 ease-in-out duration-300'}`}>
            <Image src={play} alt='playButton'></Image>
          </button>
        </div>
        <h1 className={`${hidden ? 'hidden' : 'xl:block hidden text-white absolute xl:top-20 xl:left-10 font-bold text-left xl:text-7xl'}`}>DISCOVER THE <br />
          WORLD IN A <br />
          NEW WAY</h1>
      </div>
    </>
  )
}

export default Values