'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
import courseData from '../data/music_data.json'
import { BackgroundGradient } from './ui/background-gradient'

const FeaturedCourses = () => {

    const featuresData  = courseData.courses.filter((course: any) => course.isFeatured)
    console.log(featuresData);
    
  return (
    <div className='py-12 bg-gray-900'>
      <div className="">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      <div className='mt-10'>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {
            featuresData.map((course: any) => (
                <div key={course.id} className='flex justify-center'>
                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-zinc-900 text-white overflow-hidden h-full max-w-sm'>
                     <div className="p-4 sm:p-6 flex flex-col items-center gap-5 text-center flex-grow">
                        <p className="text-lg text-teal-500 font-semibold">{course.title}</p>
                        <p className="text-base">{course.description}</p>
                        <Link href={`/courses/${course.slug}`}>
                        <Button className=' cursor-pointer'>Learn More</Button>
                        </Link>
                     </div>
                    </BackgroundGradient>
                </div>
            ))
        }
       </div>
      </div>
      <div>
        <Link href={"/courses"} className='text-center flex justify-center items-center mt-10'>
        <Button className='bg-gray-700 font-semibold cursor-pointer'>View All Courses</Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
