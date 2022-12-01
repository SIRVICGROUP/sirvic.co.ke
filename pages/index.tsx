/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
// import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Victors Portfolio</title>
        <link rel="icon" href="https://bit.ly/3AZ3Phj" />
      </Head>
      {/*header */}
      <Header/>
      {/*hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>
      {/* about */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      <section  id='experience' className='snap-center'>
      <WorkExperience/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>
      <section id='contact' className='snap-start'>
        <Contact/>
      </section>
      <Link href='#hero'>
      <footer className='sticky bottom-20 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <Image 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer'
          src='https://bit.ly/37UsMyW'
          height={100} 
          width={100}
          alt=''/>
        </div>
      </footer>
      </Link>
    </div>
  )
}
