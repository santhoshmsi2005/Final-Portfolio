import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import DeveloperCard from "../components/DeveloperCard";
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div>
            <div className='max-w-full bg-background text-white'>
                <div className='w-[95%] md:w-[96%] lg:w-[95%] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <div className='flex flex-col gap-10 mt-5'>
                        <motion.div animate={{y:[0, -10, 0]}} transition={{duration:5, repeat:Infinity}} className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/5 mt-8">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                            </span>

                            <span className="text-emerald-400 font-mono text-lg">
                                Available for opportunities
                            </span>
                        </motion.div>
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-6xl font-bold font-mono'>Hi, I'm <span className='bg-gradient-to-r from-[#FA7F25] via-[#FBBF24] to-[#FD9426] bg-clip-text text-transparent'>Santhosh</span></h1>

                            <TypeAnimation className='text-2xl font-semibold font-mono'
                                sequence={[
                                    "I'm a MERN Stack Developer",
                                    1000,
                                    "I'm a Full Stack Developer",
                                    1000,
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />

                            <p className='text-base text-muted leading-relaxed'>I build scalable, production-ready web applications with modern JavaScript. Obsessed with clean APIs, responsive UIs, and shipping things that actually work.</p>

                            <div className='grid grid-flow-row grid-rows-1 md:grid-flow-row gap-8 mt-5'>
                                <div className='flex gap-8 flex-row md:flex-row lg:flex-row'>
                                    <button className='bg-gradient-to-br from-[#FA7F25] to-[#FD9426] px-6 py-3 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-primary/40 transition-shadow flex items-center justify-center gap-2 font-semibold'> <MdOutlineFileDownload /> Download Resume</button>
                                    <button className='border text-secondary border-secondary px-5 py-3 rounded-xl cursor-pointer hover:bg-secondary/10 transition-shadow flex items-center justify-center gap-2 font-semibold group/btn'>View Projects <IoIosArrowForward className='font-semibold group-hover/btn:translate-x-2 transition-all duration-300' /> </button>
                                </div>
                            </div>
                            <div className='flex gap-6 mt-5'>
                                <div className='size-14 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors border border-gray-800/50 group/btn '><LuGithub className='text-2xl group-hover/btn:text-primary transition-colors duration-300 ' /></div>
                                <div className='size-14 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors border border-gray-800/50 group/btn '><FiLinkedin className='text-2xl group-hover/btn:text-primary transition-colors duration-300 ' /></div>
                                <div className='size-14 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors border border-gray-800/50 group/btn '><MdOutlineMailOutline className='text-2xl group-hover/btn:text-primary transition-colors duration-300 ' /></div>
                            </div>
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        >
                        <motion.div animate={{ y: [0, -15, 0] }} className="flex items-center justify-center scale-80 origin-center"
                            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                            <DeveloperCard />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection