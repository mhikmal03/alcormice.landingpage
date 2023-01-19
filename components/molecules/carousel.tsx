import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselCard = () => {

    const CarouselData = [
        {
            icon: "/assets/icons/icon1.svg",
            title: "Brand Activation",
            desc: "Our services go beyond organizing events. Were here to help you create a brand activation strategy tailored specifically to your needs."
        },
        {
            icon: "/assets/icons/icon2.svg",
            title: "Event Organizer",
            desc: "Our services go beyond organizing events. Were here to help you create a brand activation strategy tailored specifically to your needs."
        },
        {
            icon: "/assets/icons/icon3.svg",
            title: "Venue Services",
            desc: "Our services go beyond organizing events. Were here to help you create a brand activation strategy tailored specifically to your needs."
        },
        {
            icon: "/assets/icons/icon4.svg",
            title: "Hybrid Event",
            desc: "Our services go beyond organizing events. Were here to help you create a brand activation strategy tailored specifically to your needs."
        },
        {
            icon: "/assets/icons/icon1.svg",
            title: "Crew Services",
            desc: "Our services go beyond organizing events. Were here to help you create a brand activation strategy tailored specifically to your needs."
        },

    ]


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1800 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        laptop: {
            breakpoint: { max: 1800, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 630 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 630, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <Carousel className='' responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile", "laptop", "desktop"]} >
                {CarouselData.map((item, index) => {
                    return (
                        <div data-aos="zoom-in-up" key={index} className='card flex flex-col px-4 py-8 items-start justify-around min-w-[260px] max-w-[250px] 2xl:max-w-[350px] h-[350px] border border-blue-400'>
                            <img src={item.icon} alt="" />
                            <h1 className='text-2xl font-bold'>{item.title}</h1>
                            <h1 className='text-md font-medium'>{item.desc}</h1>
                        </div>
                    )
                })}
            </Carousel>
        </>
    )

}

export default CarouselCard