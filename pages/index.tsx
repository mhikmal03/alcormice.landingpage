import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Head from 'next/head'
import Navbar from '../components/molecules/navbar'
import Layout from '../components/organisms/layout'
import styles from '../styles/Home.module.css'
import bg from '../public/assets/images/bg.png'
import icon from '../public/assets/images/image 5.svg'
import Image from 'next/image'
import myimage from '../public/assets/images/image 5.svg'
import icon1 from '../public/assets/icons/icon1.svg'
import CarouselCard from "../components/molecules/carousel";
import About from "../components/organisms/about";
import Project from "../components/organisms/project";
import Values from "../components/organisms/values";
import Contact from "../components/organisms/contact";
import Footer from "../components/organisms/footer";
import Hero from "../components/organisms/hero";


export default function Home() {
  return (
    <>
      <div className='relative hero-section bg-cover bg-center bg-no-repeat px-[82px] text-white' style={{ backgroundImage: `url(${bg.src})` }}>
        <Navbar />
        <Hero />
      </div>
      <Layout>
        <div className='text-white flex flex-col gap-12 py-24'>
          <div className='' id="service">
            <h1 className='font-bold text-4xl'>Explore what <br /> we offer</h1>
          </div>
          <CarouselCard />
        </div>
      </Layout>
      <About />
      <Project />
      <Values />
      <Contact />
      <Footer />
    </>
  )
}
