/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {  Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
        `Hi, My Name is Victor`,
        'Guy-who-loves-Coffee.tsx', 
        '<ButLovesToCodeMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div  className='h-screen flex flex-col space-y-8 items-center justify-center text-center
    overflow-hidden'>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-fit'
        src='https://lh3.googleusercontent.com/eLtj1ANl3yePPFWDSGin5pyNFcbfV__qWT8EqdTNQdsFrQzBDonEKFbXvfaKLiiDF_zGov0lehhjl7B5D8xEekScWJTKNIHx3lcuS9vWjs2IkmsUAIlSQahf5Z8gS3nkUGCZxutVklnr6HeZQbXwBClkve78zz6yjfrs8nEQykOSP4tpqERB7dHf7D9fnZTJPxJs9NWpTX8aqBdUfckhfcSAlyL26aEP_nIPKsiEpCGXc96BnfNzIRgYaXC8koOWVgwnbYkQxv5kzT4IgfJq8vcuR2Tl1ZU0DPje8E0eXHnqXSOCsdT_nKBL7getl_U-zqz-Nl4EtC0_R1M9cCINvsDAKNiLYCpiiz180KcSduxCWWhgUNmD-drTJQVSyEOqxdEYNtrBBBCvFnyGsEUCBqJMjAYQ-mO57JVnTEzsUtlvA_ZlYuYnVL9BqMkWCi3udQzfYgsHcbOjgMQR0OT4Z54DHxutJi_zrXGsmGj50q5ItJZhkTO1ba8VWriRjvk9QgaiW1DdPY2J-I3xqRM2Wju2pnlcp5YZW_0kzLgJePahyrI6SydoltUyv86238nqLeutFaUGPfuaL-3kszKHxKm-tJwaDv_nTZ1nH-cEd3vjAzmWRp8lrXOD9TGl5PkV-rH08A3mDjCWlyK4SkWk-2VdK6SdJ7wDXfmBD1V3kKJd7acCPy0cDTW1yttOPXzXaHrr-xOUEUOY6wRyM-d9T3f6SghHKdtthl7GJMk2MxernpSBX3vPKRngfwz42dsG3j3gpsrC1JDSgAPU2MWSgwAteODVJBBuFORFGoO84v2krahxoOLbLvRUJk8TiAEkD0vLDwVwktXVDonFESzl-4ZjTRBRrBX-9aB6J4Fa03c1L_MpOZ8VymXzfKLmubpozNBxFuHZhOixoUUKot6zg1_rcLtJ7HRyNjvdOWddGojrF2RBJ_ICB7etOxHeyJcMBVyISbib7_BBob2d_lAp=w464-h695-no?authuser=1'
         alt=''
         />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500
            pb-2 tracking-[15px]'>RF & MW ENGINEER</h2>
        <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
            <Link href='#skills'>
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero