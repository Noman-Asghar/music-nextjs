import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from  './ui/moving-border'
import {cn} from '@/utils/utils'

const HeroSection = () => {
  return (
    <div className='relative h-auto md:h-screen w-full rounded-md flex flex-col items-center justify-center bg-black bg-grid-white/[0.2] overflow-hidden mx-auto py-10 md:py-0'>
        <div
        className={cn(
          "absolute inset-0 ",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-400 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
        <div className="mt-8">
          <Link href={"/courses"} className='text-white'>
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
      >
        Explore Courses
      </Button>

           </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
