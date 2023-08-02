import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="h-screen bg-background flex flex-row text-center md:text-left max-2-7xl px-10 justify-evenly mx-auto">
      <div className='w-1/2 flex justify-center items-center flex-col'>
        <Image src="/about.jpg"
                width={450}
                height={450}
                alt='Portrait'
                className='relative rounded-md mx-auto ml-2 object-cover transition-opacity opacity-0 duration-[2s]'
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                />
    <p className='flex items-center text-gray-500 text-sm italic my-1'>photo by Collin Cassidy</p>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center p-5'>
        <h3 className='text-center pb-2 text-4xl lg:text-4xl lg:pb-5 text-bold text-primary'>About</h3>
        <p className='text-md mt-5 lg:text-xl'>Enter the realm of digital craftsmanship! With self-taught mastery and bootcamp finesse, I excel in front-end and back-end programming. From independent wonders to collaborative ventures, my codebrush creates seamless user experiences and awe-inspiring functionalities. Seeking innovation? Let&apos;s design a masterpiece together, painting the online canvas with brilliance!</p>
      </div>
    </div>
  )
}

export default About

