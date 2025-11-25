"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from '../../data/music_data.json';
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";

const page = () => {
  return (
    <div>
      {/*  HERO SECTION WITH LAMP */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 
                   bg-clip-text text-center text-4xl font-medium tracking-tight 
                   text-transparent md:text-7xl"
        >
          All Courses ({courseData.courses.length})
        </motion.h1>
      </LampContainer>

      {/* MAIN CONTENT*/}
      <div className='pt-20 py-12 bg-[#020617]'>
        <h1 className='text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>
          Explore Courses
        </h1>

        <div className="flex flex-wrap justify-center">
          {courseData.courses.map((course: any) => (
            <CardContainer className="inter-var m-4" key={course.title}>
              <CardBody className="bg-gray-50 relative group/card m-3 
                dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                dark:bg-black dark:border-white/[0.2] 
                border-black/[0.1] w-auto sm:w-[30rem] 
                h-auto rounded-xl p-6 border">

                <CardItem translateZ="50" className="text-xl font-bold">
                  {course.title}
                </CardItem>

                <CardItem translateZ="60" as="p"
                  className="text-neutral-500 text-sm max-w-sm mt-2">
                  {course.description}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={course.image}
                    className="h-60 w-full object-cover rounded-xl"
                    alt="thumbnail"
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-20">
                  <CardItem translateZ={20} as="a"
                    href="#" className="px-4 py-2 rounded-xl text-xs">
                    Try now →
                  </CardItem>
                  <CardItem translateZ={20} as="button"
                    className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold">
                    Sign up
                  </CardItem>
                </div>

              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
